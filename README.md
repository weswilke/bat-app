# BatApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Requirements

* Build using the latest version of Angular.
* Use SASS to write your CSS and compile it down.
* Write your JavaScript using either vanilla JS or using TypeScript and compile it down.
* Build and include at least one Angular component.
* Make sure your code is supported by Chrome, FF, and IE11.
* Publish your completed project to a Github repo, and provide us with a link.

## APIs

Sign up for a free api key to use the Movie service here:
http://www.omdbapi.com/apikey.aspx

Using the first 10 results of this api search for batman movies:
http://www.omdbapi.com/?s=Batman

Take those results and look up details for each movie returned using this api pattern:
http://www.omdbapi.com/?i=tt0372784 (where i = the IMDB id found above)

Hint: Images might be blocked from hotlinking. If so, manually download all of those images to the project first, then reference them locally (parse the url string from the response).