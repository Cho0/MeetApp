import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { extractLocations, getEvents } from './api';
import NumberOfEvents from './NumberOfEvents';




class App extends Component {
  state = {
    events: [],
    locations: [],
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "All Cities"
          ? events.slice(0, numberOfEvents)
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, numberOfEvents),
        currentLocation: location,
        numberOfEvents: numberOfEvents,
      });
    });
  };
  updateNumberOfEvents(eventNumber) {
    this.setState({ numberOfEvents: eventNumber });
    const { currentLocation } = this.state;
    this.updateEvents(currentLocation, eventNumber);
  }

  render() {
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h2> Choose your nearest city:</h2>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <h3>Number of events:</h3>
        <NumberOfEvents
          updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;