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
            controller: function () { },
            controllerAs: 'MC',
            link: function (scope, element, attrs, ctrls) {
                var restrictedTypes = /email|search|text/i;
                if (!attrs.ngModel) {
                    throw new Error("element must contain ng-model attribute");
                }
                if (element[0].nodeName !== "INPUT" || !restrictedTypes.test(attrs.type)) {
                    throw new Error("mailcheck element is limited to text, email, search input types only");
                }

                // ctrls is an array. [0] contains ngModel, [1] contains directive's controller
                var ngModelCtrl = ctrls[0],
                    MC = ctrls[1],
                    result = null,
                    templateStr = MC.options.templateStr || '<p ng-show="MC.suggestion.domain">Did you mean <b ng-click="MC.correctMe(MC.suggestion.full)"><i ng-bind="MC.suggestion.full"></i></b>?</p>',
                    defaultOptions = {
                        templateStr: templateStr,
                        replaceOptions: true
                    },
                    options = angular.extend({}, defaultOptions, MC.options),
                    mailcheckDefaultOptions;

                if (!options.replaceOptions) {
                    mailcheckDefaultOptions = {
                        domains: mailcheckFactory.defaultDomains,
                        secondLevelDomains: mailcheckFactory.defaultSecondLevelDomains,
                        topLevelDomains: mailcheckFactory.defaultTopLevelDomains
                    };

                    options = angular.extend({}, defaultOptions, concatOptions(MC.options, mailcheckDefaultOptions));
                }
                /* Implementation */

                MC.suggestion = false;

                element.after($compile(options.templateStr)(scope))
                element.on('blur', function () {
                    options.email = ngModelCtrl.$viewValue;
                    MC.suggestion = false;
                    result = mailcheckFactory.run(options);
                    scope.$evalAsync(function () {
                        MC.suggestion = result;
                    });

                });
                MC.correctMe = function (val) {
                    ngModelCtrl.$setViewValue(val);
                    ngModelCtrl.$render();
                    scope.$evalAsync(function () {
                        MC.suggestion.domain = null;
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
        .module('ngMailcheck', [])
        .directive('mailcheck', mailcheck);
}());