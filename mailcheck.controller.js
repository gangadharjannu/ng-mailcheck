(function () {
    HomeController.$inject = [];
    function HomeController() {
        var HC = this;
        // HC.mailcheck = {
        //     domains: [],                                // www.gmail.in
        //     secondLevelDomains: [],                     // gmail
        //     topLevelDomains: [],                        // in
        //     distanceFunction: function () { },          // string distance function
        //     templateStr: "",                            // template string for email suggestion
        //     onCompleteFunction: function () { },        // callback function for email correction
        //     replaceOptions: true                        // true=>replace options, false=>concat options
        // }
        HC.mailcheck = {
            'Hi':"hiii"
        };
    }

    angular
        .module('myApp')
        .controller('HomeController', HomeController);
} ());