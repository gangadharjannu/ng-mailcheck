# ng-mailcheck
AngularJS 1 directive for popular [mailcheck](https://github.com/mailcheck/mailcheck) library.

# Features
ng-mailcheck supports all features that are supported by [mailcheck](https://github.com/mailcheck/mailcheck) library. In addition to that 
* Now user can replace existing options or extend the default options using **replaceOptions** option.  
    * true => replace options, false => extend options     
* Works for email, search, text input types
* Updates ngModel with email suggestion on click

# Usage
* Getting ng-mailcheck
    * **Using bower**
        * `bower install ng-mailcheck`
        * Include the script tag as `<script src="bower_components/ng-mailcheck/dist/ng-mailcheck.min.js"></script>` after your module declaration
    * **Manual Installation**
        * download [ng-mailcheck.min.js](https://rawgit.com/gangadharjannu/ng-mailcheck/master/dist/ng-mailcheck.min.js).
        * Include the script `<script src="path/ng-mailcheck.min.js"></script>` after your module declaration
* Put `ngMailcheck` module as dependency `angular.module('yourModule', ['ngMailcheck'])`
* Add mailcheck as an attribute `<input type="email" ng-model="email" mailcheck options="{}">`
* You can optionally pass options to mailcheck using `options` attribute
* Below is the sample object for options attribute
    ```javascript 
    {
      domains: [],                                // www.gmail.in
      secondLevelDomains: [],                     // gmail
      topLevelDomains: [],                        // in
      distanceFunction: function () { },          // string distance function
      templateStr: "",                            // template string for email suggestion
      replaceOptions: true                        // true=>replace options, false=>concat options
    }
    ```  

# Demo
Play around [jsbin](http://jsbin.com/mebewud/edit?html,js,output) 

# Tests 
Run `karma start` to run tests.  Test cases are written in `app/test` folder.

# Thanks
[mailcheck - https://github.com/mailcheck/mailcheck](https://github.com/mailcheck/mailcheck)

# License
Released under the MIT License.