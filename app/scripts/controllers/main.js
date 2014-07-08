'use strict';

/**
 * @ngdoc function
 * @name todolistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todolistApp
 */
angular.module('todolistApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todoList= [];
    $scope.add = function(todo){
        var newTodo={};
        angular.copy (todo,newTodo);
        $scope.todoList.push (newTodo);
        $scope.todo ={};
    };
    $scope.remove = function(todo) {
        var index = $scope.todoList.indexOf(todo)
        $scope.todoList.splice(index, 1);
    }
    $scope.edit = function(todo) {
        $scope.todo = todo;
    }
  });
