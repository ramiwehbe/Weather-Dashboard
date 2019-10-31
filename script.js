$(document).ready(function () {

    var APIKey = "2d54c14ad67ce359aeba792a000fb367";

    function displayCurrentWeather(city) {

        // Var for OpenWeather Api Key, Var for text input and a Var to query the database
        
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;

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

                // Log the response object
                console.log(response);

                // Create a var for weather-info div

                var weatherInfo = $(".weather-info");

                console.log(weatherInfo);

                // Create var for temperature response

                var tempResponse = response.main.temp;

                // Create div to display temp

                var temperature = $("<div>").text("Temperature: " + tempResponse);

                // Append the temp to main WeatherInfo div

                weatherInfo.append(temperature)

                // Create a var for humidity response:

                var humidityResponse = response.main.humidity;

                // Create div to display humidity

                var humidity = $("<div>").text("Humidity: " + humidityResponse);

                // Append the humidity to main WeatherInfo div

                weatherInfo.append(humidity);

                // Create var for wind response:

                var windResponse = response.main.humidity;

                // Create div to display wind

                var wind = $("<div>").text("Wind Speed: " + windResponse);

                // Append wind to weatherInfo

                weatherInfo.append(wind);

                // NEED UV INDEX 
                // var uvIndexResponse = response.??


                // Ending curly bracket for response function 
            });
    }

var cityArray = []
        
    // This function handles events when submit-button is clicked

    $("#search-button").on("click", function (event) {

        // I think I need stop propogation here which is event.stopPropogation() - but I get an error when I add it
        // console.log(anything);
        // Preventing the button from trying to submit the form

        event.preventDefault();

        // Grab the input data 

        var inputCityName = $("#city-input").val().trim();
        cityArray.push(inputCityName); 

        var todayDate = $('.today-date');
        console.log(todayDate)
    
        $(todayDate).text(moment().format('MM/DD/YYYY'))

        $(".city").text(inputCityName)

        displayCurrentWeather(inputCityName);

        displaySearchedCity(inputCityName);
        console.log(cityArray)

    });

    // Function to get the stored city
        
    function displaySearchedCity(newCity) {
       
        // var cityArray = storedCity.split(",")

        console.log(cityArray);

        console.log(storedCity);

         // Setting to local storage. "searchedCity" in quotes, so it's not searching for a variable.

        localStorage.setItem("searchedCity", JSON.stringify(cityArray))

        var storedCity = (JSON.parse(localStorage.getItem(cityArray)));

        // // if (typeof storedCity === "object"){
        //     storedCity.push
        // }
        // // for loop over the cityarry and then dynamically append each item in the array to the city-card-body. 

        for (var i = 0; i < cityArray.length; i++) {
            var cityName = $("<p>");

            // Adding a class of new-city-p to <p>
            cityName.addClass("new-city-p");
        
            // Providing the <p> text
            cityName.text(cityArray[i]);
            // Adding the button to the buttons-view div
            $(".city-card-body").append(cityName);
           


            // ending bracket for loop
        }}





    // Closing curly bracket for document ready function
})



// TO DO:
// WHAT IF CITIES HAVE THE SAME NAME IN DIFFERENT STATES? OR ARE MISPELLED?
// CONVERT TEMP TO FAHRENHEIT
// WHEN IS CLICKED - THE DATA APPEARS AGAIN TO THE RIGHT
// NEED TO DO THE 5-DAY FORECAST
// Need the city name to appear in main section
// CITY INFO NEEDS TO CLEAR AFTER HIT SUBMIT