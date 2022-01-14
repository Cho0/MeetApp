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