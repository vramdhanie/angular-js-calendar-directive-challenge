angular.module('calendarDemoApp', [])
.directive('calendar', function(){
    return {
        restrict: 'E',
        templateUrl: 'template.html',
        scope:true,
        link: function(scope, element, attrs){
            scope.monthlyRange = CalendarRange.getMonthlyRange(new Date());
        }
    }
});


(function(){
    console.log(CalendarRange.getMonthlyRange(new Date()));
})();

// your controller and directive code go here