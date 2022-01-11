import React from "react";
import { shallow } from "enzyme";
import CitySearch from "../CitySearch";
import { mockData } from "../mock-data";
import { extractLocations } from "../api";

describe('<CitySearch /> component', () => {
  let locations, CitySearchWrapper;
  beforeEach(() => {
    locations = extractLocations(mockData);
    CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => { }} />);
  });

  test('render text input', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });

  test('renders a list of suggestions', () => {
    CitySearchWrapper.find('#search').simulate('click');
    expect(CitySearchWrapper.find('.show-search li')).toHaveLength(locations.length + 1);
  });

  test('renders text input correctly', () => {
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });

  test('change state when text input changes', () => {
    const eventObject = { target: { value: 'Berlin' } };
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });

  test('render list of suggestions correctly', () => {
    CitySearchWrapper.find('#search').simulate('click');
    expect(CitySearchWrapper.find('.show-search li').length).toBe(locations.length + 1);
    for (let i = 0; i < locations.length; i += 1) {
      expect(CitySearchWrapper.find('.show-search li').at(i).text()).toBe(locations[i])
    }
  })

  test('suggestion list match the query when changed', () => {
    CitySearchWrapper.find('#search').simulate('click');
    CitySearchWrapper.find("#search").simulate("change", {
      target: { value: "Berlin" },
    });
    expect(CitySearchWrapper.find(".show-search li").length).toEqual(2);
    expect(CitySearchWrapper.find(".show-search li").at(0).text()).toBe('Berlin, Germany');
  });

  test('selecting a suggestion should change query state', () => {
    CitySearchWrapper.find('#search').simulate('click');
    CitySearchWrapper.find('.show-search li').at(0).simulate('click');
    expect(CitySearchWrapper.state('query')).toBe(locations[0]);
  });
});