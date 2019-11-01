$(document).ready(function () {

    // OPEN WEATHER CALL: http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}


    var APIKey = "2d54c14ad67ce359aeba792a000fb367";
    var cityArray = [];


    // Function to make the call and display current weather 

    function displayCurrentWeather(city) {

        // Var for OpenWeather Api Key, Var for text input and a Var to query the database

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey + "&units=imperial";

        // To convert to Fahrenheit: To get data in API for both current weather and forecast in Fahrenheit just add units=imperial parameter into your API call like in this example:
        // api.openweathermap.org/data/2.5/weather?q=London&units=imperial

        console.log(queryURL);

        // Run AJAX call to the OpenWeatherMap API
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // Store retrieved data inside of an object called "response"
            .then(function (response) {
                // Log the queryURL
                console.log(queryURL);

                $(".weather-info").empty()

                // Log the response object
                console.log(response);

                // Create a var for weather-info div

                var weatherInfo = $(".weather-info");

                console.log(weatherInfo);

                // Create var for temperature response

                var tempResponse = response.main.temp;

                // Create div to display temp

                var temperature = $("<div>").text("Temperature: " + tempResponse + "℉");

                // Append the temp to main WeatherInfo div

                weatherInfo.append(temperature)

                // Create a var for humidity response:

                var humidityResponse = response.main.humidity;

                // Create div to display humidity

                var humidity = $("<div>").text("Humidity: " + humidityResponse + "%");

                // Append the humidity to main WeatherInfo div

                weatherInfo.append(humidity);

                // Create var for wind response:

                var windResponse = response.main.wind;

                // Create div to display wind

                var wind = $("<div>").text("Wind Speed: " + windResponse + " MPH");

                // Append wind to weatherInfo

                weatherInfo.append(wind);

                // NEED UV INDEX 
                // var uvIndexResponse = response.??


                // Ending curly bracket for response function 
            });
    }


    // Function to get the stored city to display on the left:
    // newCity is a local variable to that function

    function displaySearchedCity(newCity) {

        $(".city-card-body").empty();

        // var cityArray = storedCity.split(",")

        console.log(cityArray);

        console.log(storedCity);

        // Setting to local storage. "searchedCity" in quotes, so it's not searching for a variable.

        localStorage.setItem("searchedCity", JSON.stringify(cityArray))

        var storedCity = (JSON.parse(localStorage.getItem(cityArray)));
        console.log(storedCity);

        
        // // for loop over the cityarry and then dynamically append each item in the array to the city-card-body. 

        for (var i = 0; i < cityArray.length; i++) {
            var cityName = $("<p>");

            // Adding a class of new-city-p to <p>
            cityName.addClass("new-city-p");

            // Providing the <p> text
            cityName.text(cityArray[i]);
            // Adding the button to the buttons-view div
            $(".city-card-body").append(cityName);

            // ending bracket for displaySearchedCity function
        }
    }

    // Function to display 5-day forecast

    function displayFiveDayForecast () {

        var forecastCard = $(".card-div");

        forecastCard.addClass("display-five-cards")

        var dayOne = $("#day-one");
        var dayTwo = $("#day-two");
        var dayThree = $("#day-three");
        var dayFour = $("#day-four");
        var dayFive = $("#day-five");

        $(dayOne).text(moment().add(1, 'days').format('MM/DD/YYYY'))
        $(dayTwo).text(moment().add(2, 'days').format('MM/DD/YYYY'))
        $(dayThree).text(moment().add(3, 'days').format('MM/DD/YYYY'))
        $(dayFour).text(moment().add(4, 'days').format('MM/DD/YYYY'))
        $(dayFive).text(moment().add(5, 'days').format('MM/DD/YYYY'))
    




        // Ending curly bracket for displayFiveDayForecast
    }


    // Function to display 5-day forecast temperatures calling OpenWeather:

    // function fiveDayForecastTemp(inputCityName) {

    //     var tempOne = $(".one-temp");
    //     var tempTwo = $(".two-temp");
    //     var tempThree = $(".three-temp");
    //     var tempFour = $(".four-temp");
    //     var tempFive = $(".five-temp");

    //     var queryTemp = "http://api.openweathermap.org/data/2.5/forecast?q=" + inputCityName + "&APPID=" + APIKey;

    //     // Run AJAX call to the OpenWeatherMap API
    //     $.ajax({
    //         url: queryTemp,
    //         method: "GET"
    //     })

            // // Store retrieved data inside of an object called "response"
            // .then(function (responseTemp) {
            //     console.log(queryTemp);
            //     console.log(responseTemp);

            //     for (var i = 0; i < 5; i++) {

            //         console.log(responseTemp.list[i].main.temp)

            //     }

            //     // Create var for temperature response

            //     var tempResponse = response.main.temp;

            // }
            // )}
        

    // //    Function to display 5-day forecast humidity calling OpenWeather:

    // function fiveDayForecastHumidity(humidity) {

    // var humidityOne = $(".one-humidity");
    // var humidityTwo = $(".two-humidity");
    // var humidityThree = $(".three-humidity");
    // var humidityFour = $(".four-humidity");
    // var humidityFive = $(".five-humidity");

    // var queryHumidity = "api.openweathermap.org/data/2.5/forecast.humidity?q=" + inputCityName + "&APPID=" + APIKey;

    // // Run AJAX call to the OpenWeatherMap API
    // $.ajax({
    //     url: queryHumidity,
    //     method: "GET"
    // })

    // }






    // CLICK EVENT:

    $("#search-button").on("click", function (event) {

        event.preventDefault();

        // Grab the input data 

        var inputCityName = $("#city-input").val().trim();
        cityArray.push(inputCityName);

        var todayDate = $('.today-date');
        console.log(todayDate)

        $(todayDate).text(moment().format('MM/DD/YYYY'))

        $(".city").text(inputCityName)

        // 5-Day Forecast

        var fiveDayText = $('#five-day-text')
        console.log(fiveDayText)
        $(fiveDayText).text("5-Day Forecast: ")


        // Call functions

        displayCurrentWeather(inputCityName);
        displaySearchedCity(inputCityName);
        displayFiveDayForecast();
        // fiveDayForecastTemp(inputCityName)
        console.log(cityArray)

    });



    // Closing curly bracket for document ready function
})



// TO DO:
// UV INDEX
// SEARCH ICON
// NEED TO DO THE 5-DAY FORECAST
// NEED ICONS IN 5-DAY FORECAST
// WIND SPEED AND HUMIDITY ARE RENDERING THE SAME
// MAKE PREVIOUSLY SEARCHED CITY 