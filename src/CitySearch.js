import React, { Component } from "react";



class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestion: false
  };
  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,

    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion
    });
    this.props.updateEvents(suggestion);
  }

  render() {
    const { showSuggestion } = this.state;
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onClick={() => this.setState({ showSuggestion: true })}
          onBlur={() => this.setState({ showSuggestion: false })}
        />
        <ul className={`${showSuggestion ? "show" : "hide"}-search`}>
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    )
  }
}

export default CitySearch;