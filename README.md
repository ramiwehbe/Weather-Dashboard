# jengamez.github.io
# Unit 06 Server-Side APIs Homework: Weather Dashboard

## Description

For this project, I was to create a weather dashboard using data from third-party APIs.  The user story is:

As a traveler
I want to see the weather outlook for multiple cities
so that I can plan a trip accordingly.

There is a search input for the user to enter a city. The city's weather renders to the center of the page. The searched city is then stored on the left panel. I unsuccesfully tried to make it so the user can click on the previously searched city and that city's weather renders again to the center of the page.

Also, upon entering the city in the input, a five-day forecast was to render below. I hope to keep improving upon this functionality until it works.  I am realizing one of my mistakes is that I broke each forecast card into seperate objects, rather than looping through an array.  I had difficulty pulling in the UV Index, the weather index and accessing the wind.


## Installation

I retreived the date data from Moment.js for the current date and the 5-day forecast successfully.  I retreived weather data from Openweathermap.org. 

## License

This project is licensed under the MIT License.
