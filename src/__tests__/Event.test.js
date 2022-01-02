import React from "react";
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
  // let EventWrapper;
  // beforeAll(() => {
  //   const EventWrapper = shallow(<Event events={mockData} />);
  // });
  test('Show event summary', () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test('Show Description', () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".description")).toHaveLength(1)
  })

  test('Shows event location', () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("shows start time", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".start")).toHaveLength(1);
  })

  test("show end time", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.find(".end")).toHaveLength(1);
  })

  test("event shows default collapsed", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    expect(EventWrapper.state("collapsed")).toBe(true)
  })

  test("button onclick should show info", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".toggleShow").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  })

  test("button onclick should collapse info", () => {
    const EventWrapper = shallow(<Event events={mockData} />);
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".toggleShow").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  })


});