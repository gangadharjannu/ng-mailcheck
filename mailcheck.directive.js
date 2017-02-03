
(function () {
    mailcheck.$inject = ['$compile', '$timeout', 'mailcheckFactory'];
    function mailcheck($compile, $timeout, mailcheckFactory) {
        var DDO = {
            restrict: 'A',
            require: ['?ngModel', '?mailcheck'],
            scope: {},
            bindToController: {
                options: '='
            },
            controller: function ($scope, $element) {
                console.log("Controller");
                var MC = this;
                MC.completed = false;
                MC.suggestion = false;
            },
            controllerAs: 'MC',
            link: function (scope, element, attrs, ctrls) {
                console.log("Link");
                // ngModel is an array [0] contains ngModel [1] contains directive's controller
                var ngModelCtrl = ctrls[0],
                    MC = ctrls[1],
                    result = null,
                    templateStr = [
                        '<p ng-show="MC.completed">',
                        '<span ng-show="MC.suggestion">Did you mean <b ng-click="correctMe(MC.suggestion.full)"><i ng-bind="MC.suggestion.full"></i></b>?</span>',
                        '<span ng-show="!MC.suggestion">No Suggestions :(</span>',
                        '</p>'
                    ].join(''),
                    defaultOptions = {
                        templateStr: templateStr,
                        replaceOptions: true
                    },
                    options = angular.extend({}, defaultOptions, MC.options),
                    mailcheckDefaultOptions;

                if (!options.replaceOptions) {
                    // mailcheckDefaultOptions = angular.copy({
                    //     domains: mailcheckFactory.defaultDomains,
                    //     secondLevelDomains: mailcheckFactory.defaultSecondLevelDomains,
                    //     topLevelDomains: mailcheckFactory.defaultTopLevelDomains
                    // });
                    mailcheckDefaultOptions = {
                        domains: mailcheckFactory.defaultDomains,
                        secondLevelDomains: mailcheckFactory.defaultSecondLevelDomains,
                        topLevelDomains: mailcheckFactory.defaultTopLevelDomains
                    };

                    options = angular.extend({}, defaultOptions, concatOptions(MC.options, mailcheckDefaultOptions));
                }
                /* Implementation */
                element.after($compile(options.templateStr)(scope))
                element.on('blur', function (event) {
                    options.email = ngModelCtrl.$viewValue;
                    MC.completed = false;
                    MC.suggestion = false;
                    result = mailcheckFactory.run(options);
                    scope.$evalAsync(function () {
                        MC.suggestion = result;
                        MC.completed = true;
                    });

                });
                scope.correctMe = function (val) {
                    ngModelCtrl.$setViewValue(val);
                    ngModelCtrl.$render();
                    scope.$evalAsync(function () {
                        MC.completed = false;
                    });
                }
                /* utility function for concatenating user specified options with mailcheck default options */
                function concatOptions(dest, src) {
                    var option;
                    for (option in src) {
                        if (src.hasOwnProperty(option)) {
                            if (dest[option] && dest[option].length) {
                                dest[option] = src[option].concat(dest[option]);
                            }
                        }
                    }
                    return dest;
                }
            }
        };
        return DDO;
    }
    angular
        .module('myApp')
        .directive('mailcheck', mailcheck);
} ())