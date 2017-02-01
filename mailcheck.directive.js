
(function() {
    mailcheck.$inject = ['$compile', '$timeout', 'mailcheckFactory'];
    function mailcheck($compile, $timeout, mailcheckFactory) {
        var DDO = {
            restrict: 'EA',
            require: ['?ngModel', '?mailcheck'],
            scope: {},
            bindToController: {
                mailcheck: '='
            },
            controller: function($scope, $element) {
                console.log("Controller");
                var MC = this;
                MC.completed = false;
                MC.suggestion = false;
            },
            controllerAs: 'MC',
            link: function(scope, element, attrs, ctrls) {
                console.log("Link");
                // ngModel is an array [0] contains ngModel [1] contains directive's controller
                var ngModelCtrl = ctrls[0],
                    MC = ctrls[1],
                    result = null,
                    templateStr = [
                        '<span ng-show="MC.completed">',
                        '<span ng-show="MC.suggestion">Did you mean <b ng-click="correctMe(MC.suggestion.full)"><i ng-bind="MC.suggestion.full"></i></b>?</span>',
                        '<span ng-show="!MC.suggestion">No Suggestions :(</span>',
                        '</span>'
                    ].join(''),
                    defaultOptions = {
                        templateStr: templateStr,
                        replaceOptions: true
                    },
                    options = angular.extend({}, defaultOptions, scope.options);

                /* Implementation */
                element.after($compile(options.templateStr)(scope))
                element.on('blur', function(event) {
                    options.email = ngModelCtrl.$viewValue;
                    MC.completed = false;
                    MC.suggestion = false;
                    result = mailcheckFactory.run(options);
                    scope.$evalAsync(function() {
                        MC.suggestion = result;
                        MC.completed = true;
                    });

                });
                scope.correctMe = function(val) {
                    ngModelCtrl.$setViewValue(val);
                    ngModelCtrl.$render();
                    scope.$evalAsync(function() {
                        MC.completed = false;
                    });
                }
            }
        };
        return DDO;
    }
    angular
        .module('myApp')
        .directive('mailcheck', mailcheck);
} ())