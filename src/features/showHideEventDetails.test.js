import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import Event from "../event";
import App from '../App';
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideEventDetails.feature");

defineFeature(feature, test => {

  test('When the user first loads into the page, the event details should be collapsed.', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    when('the page first loads', () => {

    });

    then('event details should be collapsed by default.', () => {
      expect(AppWrapper.find('.hide-details')).toHaveLength(0);
    });
  });

  test('User clicks show details button, it should show more detail', ({ given, when, then }) => {

    let EventWrapper;
    given('an event\'s detail is collapsed', async () => {
      EventWrapper = shallow(<Event event={mockData[0]} />)
      expect(EventWrapper.state('collapsed')).toBe(true);
    });

    when('the user clicks on show detail button', () => {
      EventWrapper.find(".show-details").simulate("click");
    });

    then('the event details should show.', () => {
      expect(EventWrapper.state("collapsed")).toBe(false);
    });
  });

  test('When the user clicks the show detail button while expanded, event should collapse', ({ given, when, then }) => {

    let EventWrapper;
    given('an event\'s detail is showing', async () => {
      EventWrapper = shallow(<Event event={mockData[0]} />)
      EventWrapper.setState({ collapsed: false });
    });

    when('the user clicks on show detail button', () => {
      EventWrapper.find(".hide-details").simulate("click");
    });

    then('the event details should collapse.', () => {
      expect(EventWrapper.state("collapsed")).toBe(true);
    });
  });

})