mailcheck.$inject = [''];
function mailcheck() {
    var DDO={
        restrict:'EA',
        scope:{},
        bindToController:{

        },
        controller: function(){

        },
        controllerAs: 'mailcheck',
        template: [
            '',
            '',
            ''
            ].join('')

    };

    return DDO;
}

angular
    .module('myApp')
    .directive('mailcheck', mailcheck);