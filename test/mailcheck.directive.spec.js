// describe('mailcheck directive', function () {
//     beforeEach(function () {
//         var compile, scope, directiveElem;
//         module('myApp');

//         inject(function ($compile, $rootScope) {
//             compile = $compile;
//             scope = $rootScope.$new();
//         });
//         directiveElem = getCompileElement();

//         it('should have suggestion element', function () {
//             var spanElement = directiveElem.next();
//             expect(spanElement).toBeDefined();
//             expect(spanElement.text()).toEqual("");
//         });

//         function getCompileElement() {
//             var element = angular.element('<input type="email" name="email" ng-model="email" mailcheck options="{}" >');
//             var compiledElement = compile(element)(scope);
//             scope.$digest();
//             return compiledElement;
//         }
//     });
// });
// ---SPECS-------------------------

describe('mailcheck directive', function () {
    var element,
        email = 'gangadharjannu@gmal.com';
    beforeEach(function () {
        module('myApp');
        element = angular.element('<input type="email" name="email" ng-model="email" mailcheck options="{}" >');
        inject(function ($rootScope, $compile) {
            var scope = $rootScope.$new();
            
            //wrap scope changes and directive compilation using evalAsync
            //scope.$evalAsync(function(){
            scope.$apply(function(){
                scope.email = email;
                element.val(email);
                
                $compile(element)(scope);
            });
            element.triggerHandler('blur');
        });
    });
    it('should return gangadharjannu@gmal.com', function () {
        expect(element.val()).toBe('gangadharjannu@gmal.com');
    });

    it('should contains p element with text "gangadharjannu@gmail.com" ', function(){
        expect(element.next().find('i').text()).toEqual("gangadharjannu@gmail.com");
        //expect(element.next().text()).toBeCloseTo('Did you mean').toContain('Did you mean');
    });
});