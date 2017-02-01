# ng-mailcheck
AngularJS 1 directive for [mailcheck](https://github.com/mailcheck/mailcheck) library.

Tasks:   
- [ ] Create MVP
- [ ] Angualr directive
 
checklist for implementing mailcheck directive on an element:  

* text or email input types only.
* must have ngModel
* can have optional attributes
    * domains                 // www.gmail.com
    * secondLevelDomains      // gmail
    * topLevelDomains         // com
    * distanceFunction        // string distance function
    * templateStr             // suggestion template string
    * onCompleteFunction      // complete callback function
    * replaceOptions  // true=>replace options, false=>extend options     
* Update ngModel with email suggestion on email selection

secondLevelDomains,topLevelDomains,distanceFunction,templateStr,onCompleteFunction,replaceOptions