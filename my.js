angular.module("todoListApp", [])   // uvek ostavis ovo [] da angluar zna da kreira aplikaciju, isto stavi todolist u body-u gore

.controller('mainCtrl', function($scope, dataService){ //mainCtrl je pravilo da se tako zove

  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.push(todo);
  };

  $scope.helloWorld = dataService.helloWorld;

  dataService.getTodos(function(response) { // dobija response od then-a dole
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);  // koji indeks i samo jedan
  };
  $scope.saveTodo = function(todo){
    dataService.saveTodo(todo);
  };
})
.service('dataService', function($http) {

  this.helloConsole = function(){
      console.log('This is the hello console servise!');
  };

  this.getTodos = function(callback) {
    $http.get('mock/todos.json')
    .then(callback)                               //then sluzi za pokretanje kada je uspesno dobavljen od servera
  };

  this.deleteTodo = function(todo) {
    console.log("The" + todo.name + " has been deleted!")
    //other logic
  };

  this.savetodos = function(todo) {
    console.log("The" + todo.name + " has been saved!");
    //other logic.....
  };


});
