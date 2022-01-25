import React, { Component } from "react";
import { ErrorAlert } from "./Alert";
class NumberOfEvents extends Component {
  state = {
    numberOfEvents: "",
    errorText: ""
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 16) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Please enter a number between 1 and 16',
      })
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: '',
      });
      this.props.updateNumberOfEvents(value);
    }
  };

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <input
          type="number"
          className="newNumber"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
          placeholder={numberOfEvents}
        />
      </div>
    );
  }
}
export default NumberOfEvents;