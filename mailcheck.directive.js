
(function () {
    mailcheck.$inject = ['mailcheckService'];
    function mailcheck(mailcheckService) {
        var DDO = {
            restrict: 'EA',
            scope: {},
            bindToController: {

            },
            controller: function () {

            },
            controllerAs: 'mailcheck',
            link: function (scope, elem, attrs) {

                var options = attrs['options'] || {},
                    result = null,
                    HTMLString = angular.element("<p class='email-hint'></p>"),
                    value = null;

                HTMLString.on('click', function (event) {
                    if (event.target.nodeName.match("I|B")) {
                        scope.$evalAsync(function () {
                            angular.element(elem).val(event.target.innerText)
                            angular.element(elem.next())[0].style.visibility = "hidden";
                        });
                    }
                });
                angular.element(elem).on('blur', function (event) {
                    value = event.target.value;
                    if (value) {
                        options.email = event.target.value;
                        result = mailcheckService.run(options)
                        if (result) {
                            HTMLString = "Did you mean <b><i>" + result.full + "</i></b>?";
                        } else {
                            HTMLString = "No Suggestions :(";
                        }
                        angular.element(elem.next()).html(HTMLString);
                        result && (angular.element(elem.next())[0].style.visibility = "visible");
                    } else {
                        return false;
                    }
                });
                angular.element(elem).after(HTMLString);
            },
            template: [
                // '<div>Hiii',
                // 'How are you?',
                // 'How do you do?</div>'
            ].join('')
        };

        return DDO;
    }
    angular
        .module('myApp')
        .directive('mailcheck', mailcheck);
} ())