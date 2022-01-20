import React, { Component } from "react";
import { InfoAlert } from "./Alert";
class CitySearch extends Component {
  state = {
    query: "",
    suggestions: this.props.locations,
    showSuggestion: true,
    infoText: ''
    // showSuggestion: false,
  };
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestion: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: "We can not find the city you are looking for. Please try another city",
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
    });
    this.props.updateEvents(suggestion);
  };

  componentDidMount() {
    window.addEventListener("click", (e) => {
      if (e.target.id === "search") this.setState({ showSuggestion: true });
      else if (e.target.className === "suggestion")
        this.setState({ showSuggestion: false });
      else this.setState({ showSuggestion: false });
    });
  }

  render() {
    const { showSuggestion } = this.state;
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <input
          type="text"
          className="city"
          id="search"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onClick={() => this.setState({ showSuggestion: true })}
        />
        <ul className={`${showSuggestion ? "show" : "hide"}-search`}>
          {this.props.locations
            .filter((suggestion) => {
              return (
                ["", "all"].includes(this.state.query) ||
                suggestion
                  .toUpperCase()
                  .indexOf(this.state.query.toUpperCase()) > -1
              );
            })
            .map((suggestion) => (
              <li
                className="suggestion"
                key={suggestion}
                onClick={(e) => {
                  this.handleItemClicked(suggestion);
                }}
              >
                {suggestion}
              </li>
            ))}
          <li
            className="suggestion"
            onClick={() => this.handleItemClicked("all")}
          >
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;