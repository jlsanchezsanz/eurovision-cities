# EurovisionCities

## Table of contents
* [Installation and use](#installation-and-use)
* [Running unit tests](#running-unit-tests)
* [Build](#build)
* [Technologies used](#technologies-used)
* [Solution](#solution)
* [Performance](#performance)

## Installation and use

1. Clone [this repository](https://stash.ebu.ch/projects/EL/repos/exercise-db/browse) and execute `docker-compose up` inside of the project folder to run the database and the API.

2. Clone [this other repository](https://github.com/jlsanchezsanz/eurovision-cities) for the frontend application.

3. Run `yarn` inside of `eurovision-cities` project in order to install dependencies.

4. Run `yarn start` for a dev server and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `yarn test` to execute the unit tests and `yarn test:coverage` for a more detailed output with coverage info.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Technologies used
Project is created using:
* Angular 8.1.3
* Angular Material 8.2.3
* Ngrx 9.2.0
* Rxjs 6.4.0
* Jest 26.0.1
* Typescript 3.4.3

## Solution

Since the application is based in two views I decided to split the code in two main lazy loaded modules: `Home` and `Cities`.

While `Home` is quite simple, due to it's a static page, `Cities` contains all the logic about fetching the list of cities from the API.

I followed the higher order components approach and separated components with logic, like the ones that access the store (i.e. `CitiesContainerComponent`), from the ones that are merely representational.

In a first iteration I decided to requests cities lazily on page change and save them in the store. But then I asked if there was a way to filter in the API and since there wasn't I changed the approach and started lazy loading all of them one after the other. This why I could apply filter and sorting to the whole list.

## Performance

These are the strategies used to improve the performance of the app:
* Use ChangeDetectionStrategy.OnPush to avoid change detection to be triggered when no necessary
* Lazy load home and cities modules
* Lazy load cities for non visible pages
* Save cities in Ngrx store
