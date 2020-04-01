describe("mailcheck directive", function () {
  var element,
    email = "gangadharjannu@gmal.com";
  beforeEach(function () {
    module("myApp");
    element = angular.element(
      '<input type="email" name="email" ng-model="email" mailcheck options="{}" >'
    );
    inject(function ($rootScope, $compile) {
      var scope = $rootScope.$new();

      //wrap scope changes and directive compilation using evalAsync
      //scope.$evalAsync(function(){
      scope.$apply(function () {
        scope.email = email;
        element.val(email);

        $compile(element)(scope);
      });
      element.triggerHandler("blur");
    });
  });
  it("should return gangadharjannu@gmal.com", function () {
    expect(element.val()).toBe("gangadharjannu@gmal.com");
  });

  it('should contains p element with text "gangadharjannu@gmail.com" ', function () {
    expect(element.next().find("i").text()).toEqual("gangadharjannu@gmail.com");
  });
});
