import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";


const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test('When user hasn\'t specified a number, 16 is the default number.', ({ given, when, then }) => {
    let NumberOfEventsWrapper;
    given('user opened the app or selected a city', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    when('the user does not specify the number of shown events', () => {

    });

    then('a list of 16 events should return to the user', () => {
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(16);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let NumberOfEventsWrapper;
    given('user opened the app or selected a city', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    when('the user does specify the number of shown events', () => {
      NumberOfEventsWrapper.setState({ numberOfEvents: 8 })
    });

    then('a list of events with the specified number should be returned to the user', () => {
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(8);
    });
  });
})