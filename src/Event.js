import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    return {
      collapsed: !this.state.collapsed
    };

  };

  render() {
    return <div className="Event">
      <h3 className="summary">{Event.summary}</h3>

      <button
        onClick={() => this.handleClick()}>
      </button>
      <div className="toggleShow">
        <h4 className="location">{Event.locations}</h4>
        <h4 className="start">{Event.start}</h4>
        <h4 className="end">{Event.end}</h4>
        <p className="description">{Event.description}</p>
      </div>
    </div>;
  }
}
export default Event;