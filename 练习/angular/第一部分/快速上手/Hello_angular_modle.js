/**
 * Created by pc on 2016/8/13.
 */
var myApp = angular.module('myApp',[]);

myApp.controller('hello',['$scope',//告诉angular需要注入scope这个东西
    function HelloAngular($scope){
        $scope.greeting={
            text:'hello'
        }
    }
]);