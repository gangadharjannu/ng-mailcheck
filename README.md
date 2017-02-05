# ng-mailcheck
AngularJS 1 directive for popular [mailcheck](https://github.com/mailcheck/mailcheck) library.

# Features
ng-mailcheck supports all features that are supported by [mailcheck](https://github.com/mailcheck/mailcheck) library. In addition to that 
* Now user can replace existing options or extend the default options using **replaceOptions** option.  
    * true=>replace options, false=>extend options     
* Works for email, search, text input types

# Demo
Play around [jsbin](http://jsbin.com/mebewud/edit?html,js,output) 

***
checklist for implementing mailcheck directive on an element:  
* text or email search input types only.
* must have ngModel
* can have optional attributes
    * domains                   // www.gmail.com
    * secondLevelDomains        // gmail
    * topLevelDomains           // com
    * distanceFunction          // string distance function
    * templateStr               // suggestion template string
    * replaceOptions            // true=>replace options, false=>extend options     
* Update ngModel with email suggestion on email selection