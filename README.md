# angular2_using_open_weather

Angular application showing REST communication example with
<a href="http://openweathermap.org/" target="_blank">OpenWeatherMap</a>
service and visualize received data in human readable format.

<a href="http://openweathermap.org/api" target="_blank">Weather API - OpenWeatherMap</a>
is free, but for access you need to sign up for API key.

In web browser enter `http://localhost:3000/` address. At the beginning
switch to "Klucz API" page and enter granted API key (API key is not
stored in local storage for security reason). After entering API key you
can switch back to "Aktualna pogoda" page and enter interesting location
(city name or city name and county code). After that application will
communicate with <a href="http://openweathermap.org/" target="_blank">OpenWeatherMap</a>
REST service and after retrieve data visualize it for user.

## Using components

<a href="http://www.angular.io/" target="_blank">Angular</a><br>
<a href="http://getbootstrap.com/" target="_blank">Bootstrap</a><br>
<a href="http://bootswatch.com/" target="_blank">Bootswatch</a><br>

## Install npm packages

Before first run you need to install necessary node packages, run the
following command in your terminal:

```shell
npm install
```

## Running application

Run the following command in you terminal:

```shell
npm start
```

In web browser enter `http://localhost:3000/` address.
