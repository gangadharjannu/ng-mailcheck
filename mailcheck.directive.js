
(function () {
    mailcheck.$inject = [''];
    function mailcheck() {
        var DDO = {
            restrict: 'EA',
            scope: {},
            bindToController: {

            },
            controller: function () {

            },
            controllerAs: 'mailcheck',
            template: [
                'Hiii',
                'How are you?',
                'How do you do?'
            ].join('')

        };

        return DDO;
    }
    angular
        .module('myApp')
        .directive('mailcheck', mailcheck);
})