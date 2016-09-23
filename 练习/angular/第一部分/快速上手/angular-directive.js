/**
 * Created by pc on 2016/8/13.
 */
var myApp = angular.module('myApp',[]);

myApp.directive('hello',function(){
    return {
        restrict:'E',
        template:'<div>Hi everyBaby</div>',
        replace:'true'
    }
})