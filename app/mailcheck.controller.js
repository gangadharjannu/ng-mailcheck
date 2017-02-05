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
        HC.mailcheckOptions = {
            'Hi': "hiii",
            "topLevelDomains": ['co.in'],
            "replaceOptions": false
        };
        HC.mailcheckOptions1 = {
            'Hi': "Byee",
            "topLevelDomains": ['me'],
            "replaceOptions": true
        };
    }

    angular
        .module('myApp')
        .controller('HomeController', HomeController);
} ());