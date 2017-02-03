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



// document.getElementById("transferForm").addEventListener("keypress", function (e) {
//     e = e || event;
//     var txtArea = /textarea/i.test((e.target || e.srcElement).tagName);
//     return txtArea || (e.keyCode || e.which || e.charCode || 0) !== 13;
// })

// document.getElementById("quantity").addEventListener("keypress", function (event) {
//     var keyCode = event.keyCode || event.which;
//     if (keyCode === 13) {
//         event.preventDefault();
//         addItem();
//     }
// });
// document.getElementById("quantity").addEventListener("keyup", function (event) {

// });
// document.getElementById("addButton").addEventListener("click", addItem);
// function addItem() {
//     // addItem code    
// }

// HC.mailcheck = {
//     domains: mailcheckFactory.defaultDomains,
//     secondLevelDomains: mailcheckFactory.defaultSecondLevelDomains,
//     topLevelDomains:mailcheckFactory.defaultTopLevelDomains,
// }