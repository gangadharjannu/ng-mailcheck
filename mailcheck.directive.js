
(function () {
    mailcheck.$inject = ['$compile', '$timeout', 'mailcheckService'];
    function mailcheck($compile, $timeout, mailcheckService) {
        var DDO = {
            restrict: 'EA',
            require: '?ngModel',
            scope: {},
            bindToController: {
                mailcheck: '='
            },
            controller: function () {

            },
            controllerAs: 'MC',
            link: function (scope, element, attrs, ngModel) {
                var result = null,
                    templateStr = [
                        '<span ng-show="completed">',
                        '<span ng-show="suggestion">Did you mean <b ng-click="correctMe(suggestion.full)"><i ng-bind="suggestion.full"></i></b>?</span>',
                        '<span ng-show="!suggestion">No Suggestions :(</span>',
                        '</span>'
                    ].join(''),
                    defaultOptions = {
                        templateStr: templateStr,
                        replaceOptions: true
                    },
                    options = angular.extend({}, defaultOptions, scope.options);

                /* Implementation */
                element.after($compile(options.templateStr)(scope))
                element.on('blur', function (event) {
                    options.email = ngModel.$viewValue;
                    scope.completed = false;
                    scope.suggestion = false;
                    result = mailcheck.run(options);
                    scope.$evalAsync(function () {
                        scope.suggestion = result;
                        scope.completed = true;
                    });

                });
                scope.correctMe = function (val) {
                    ngModel.$setViewValue(val);
                    ngModel.$render();
                    scope.completed = false;
                }
            }
        };
        return DDO;
    }
    angular
        .module('myApp')
        .directive('mailcheck', mailcheck);
} ())