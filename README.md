User Stories
<------------------------------------------------------------------------>

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
Scenario 1: An event element is collapsed by default
Scenario 2: User can expand an event to see its details
Scenario 3: User can collapse an event to hide its details

FEATURE 3: SPECIFY NUMBER OF EVENTS
Scenario 1: When user hasn’t specified a number, 32 is the default number
Scenario 2: User can change the number of events they want to see

FEATURE 4: USE THE APP WHEN OFFLINE
Scenario 1: Show cached data when there’s no internet connection
Scenario 2: Show error when user changes the settings (city, time range)

FEATURE 5: DATA VISUALIZATION
Scenario 1: Show a chart with the number of upcoming events in each city


<------------------------------------------------------------------------>
Gherkin (“Given-When-Then”) syntax


FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
As a user,
I should be able to expand and collapes event details
So that the information I need is easier to read.

FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user,
I should be able to see a certain number of events at a time and change that number
So that I can get a bigger scope or smaller scope of informations at once.

FEATURE 4: USE THE APP WHEN OFFLINE
As the program,
I should be able to work while the app is offline
So that the user will be able to get notifications and access saved information when the internet is offline.

FEATURE 5: DATA VISUALIZATION
As a user,
I want to see the city with the most upcoming events in each city
So that I can plan ahead to join events that may be closeby where ever I may want to go
