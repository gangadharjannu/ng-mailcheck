(function () {
  HomeController.$inject = [];
  function HomeController() {
    var HC = this;

    HC.mailcheckOptions = {
      Hi: "hiii",
      topLevelDomains: ["co.in"],
      replaceOptions: false,
    };
  }

  angular.module("myApp").controller("HomeController", HomeController);
})();
