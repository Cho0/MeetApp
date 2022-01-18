import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 16,
    message: ""
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 0 || value > 16) {
      this.setState({
        message: "Enter number between 1-16"
      })
    } else {
      this.setState({
        numberOfEvents: value,
      })
    }
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="newNumber"
          value={this.state.numberOfEvents}
          onChange={(e) => this.handleInputChanged(e)}
        />
      </div>
    )
  }
}
export default NumberOfEvents;