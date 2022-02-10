The "MeetApp" is a progressive web app that uses serverless funtions. In the project, a lot of time was put into 4 types of testing.
-Unit Testing
-Integration Testing
-User Acceptance
-End-to-End testing
And also included continuous integration
The Project also includes the use of a google API and AWS for authentication.

----------------------------------------------------------------------------------------------------------------------------------------------------------------
Key features:
● Filter events by city.
● Show/hide event details.
● Specify number of events.
● Use the app when offline.
● View a chart showing the number of upcoming events by city.
----------------------------------------------------------------------------------------------------------------------------------------------------------------
Feature: Filter events by city

  Scenario: When a user hasn't searched for a city, show upcoming events from all cities.
    Given user hasn't searched for any city
    When the user opens the app
    Then the user should see the list of upcoming events.

  Scenario: User should see a list of suggestions when they search for a city
    Given the main page is open
    When the user starts typing in the city textbox
    Then the user should receive a list of cities (suggestions) that match what they've typed.

  Scenario: User can select a city from the suggested list
    Given user was typing "Berlin" in the city textbox
    And the list of suggested cities is showing
    When the user selects a city (e.g., "Berlin, Germany") from the list
    Then their city should be changed to that city (i.e., "Berlin, Germany")
    And the user should receive a list of upcoming events in that city.
    
    
Feature: Show and Hide event details

  Scenario: When the user first loads into the page, the event details should be collapsed.
    Given the main page is open
    When the page first loads
    Then event details should be collapsed by default.

  Scenario: User clicks show details button, it should show more detail
    Given an event's detail is collapsed
    When the user clicks on show detail button
    Then the event details should show.

  Scenario: When the user clicks the show detail button while expanded, event should collapse
    Given an event's detail is showing
    When the user clicks on show detail button
    Then the event details should collapse.    


Feature: Specify number of events

  Scenario: When user hasn't specified a number, 16 is the default number.
    Given user opened the app or selected a city
    When the user does not specify the number of shown events
    Then a list of 16 events should return to the user

  Scenario: User can change the number of events they want to see.
    Given user opened the app or selected a city
    When the user does specify the number of shown events
    Then a list of events with the specified number should be returned to the user
    
    
Feature: Use the app when offline.

  Secenario: When user has no internet connection, app will still function with data.
    Given user is on main page
    When there is no internet connection
    Then event list, search area bar and number of events should still work.


Feature: View a chart showing the number of upcoming events by city.

  Scenario: I should be able to see graphical data about events.
    Given user is on main page
    When the main page loads
    Then graphs stating number of events in each area and percentage of events relevant to different genres should appear.
    
  Scenario: The Graphs should update when settings are changed.
    Given user is on main page
    When the city and/or the number of events are changed
    Then graphs should show respective statistics.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

![image](https://user-images.githubusercontent.com/86700844/153513533-e5da99da-617e-451f-9c7f-33ad2ef2387c.png)






![image](https://user-images.githubusercontent.com/86700844/153513590-d195ab76-415b-4191-90b2-4c34bdba8152.png)


