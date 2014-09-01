angular.module('myApp.controllers', []).
	controller('dashboardCtrl', function($scope){
		var vm = $scope.vm = {};
		vm.option = {
			title:[
				{
					type:"input",
					name:"title",
					value:""
				},
				{
					type:"input",
					name:"subtext",
					value:""
				}
			],
			toolbox:{

			}
		}
		vm.heads = ["title","toolbox","tooltip","lengend","grid","xAxis","yAxis","series"];
	})