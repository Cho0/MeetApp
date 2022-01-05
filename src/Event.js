import React, { Component } from "react";
import Button from 'react-bootstrap/Button'

class Event extends Component {

  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state
    return (

      <div className="event">

        <h2 className="summary">{event.summary}</h2>

        <p className="start-date">
          {event.start.dateTime}
        </p>

        <p className="end-date">
          {event.end.dateTime}
        </p>

        <p className="location">
          {event.location}
        </p>

        <Button variant="outline-info"
          className={`${collapsed ? "show" : "hide"}-details`}
          onClick={this.handleClick}
        >
          {collapsed ? "Show Details" : "Hide Details"}
        </Button>

        {!collapsed &&
          <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
            <p className="event-description">{event.description}</p>
          </div>
        }
      </div>
    );
  }
}
export default Event;