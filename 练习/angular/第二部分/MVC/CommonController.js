/**
 * Created by pc on 2016/8/13.
 */
function CommonController($scope){
    $scope.test3=function(){
        alert('这是通用的')
    }
}
function Controller1($scope){
    $scope.greeting={
        text:'hello1'
    };
    $scope.test1=function(){
        alert('text1')
    }
}
function Controller2($scope){
    $scope.greeting={
        text:'hello2'
    };
    $scope.test2=function(){
        alert('text2')
    }
}