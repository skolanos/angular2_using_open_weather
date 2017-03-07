# angular2_using_open_weather

Aplikacja w Angular pokazuje możliwość komunikacji z usługą udostępnioną
za pośrednictwem serwisu REST OpenWeatherMap.

Do prawidłowego działania potrzebne jest uzyskanie tokena ze strony
<a href="http://openweathermap.org/api" target="_blank">Weather API - OpenWeatherMap</a>.
Po rejestracji użytkownika i otrzymaniu tokena umożliwia on dostęp do bezpłatnego
serwisu REST z danymi pogodowymi.

## Instalacja pakietów npm

Przed pierwszym uruchomieniem aplikacji konieczne jest pobranie pakietów wymienionych
w pliku `package.json`. W głównym katalogu aplikacji należy wykonać polecenie:

```shell
npm install
```

## Uruchomienie aplikacji

W głównym katalogu aplikacji należy wykonać polecenie:

```shell
npm start
```

W przeglądarce należy przejść do adresu `http://localhost:3000/`. Pierwszą rzeczą
jest przejście do zakładki "Klucz API" i wprowadzenie otrzymanego tokena.
Po podaniu tokena można przejść do zakładki "Aktualna pogoda" i korzystać z danych
pobieranych z serwisu <a href="http://openweathermap.org/" target="_blank">OpenWeatherMap</a>
za pośrednictwem serwisu REST.
