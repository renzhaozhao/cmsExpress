var app = angular.module('app.news', [])

.factory('News', function($rootScope,$http){

    return {
        all: function(){
            var url = Const.SERVER_HOST + 'news';
            $http.get(url).success(function(data){
                $rootScope.newsList = [];
                angular.forEach(data, function(el, key){
                    el.id = key + 1;
                    $rootScope.newsList.push(el);
                });
            })
        }
    };
})

.controller('ListCtrl',function($scope,News){
    News.all();
})

.controller('DetailCtrl',function($scope,$rootScope,$routeParams,News){
    News.all();
    $scope.news = $rootScope.newsList[$routeParams.id-1];
})

.controller('AddCtrl',function($scope,$location,News){
    var newsList = News.all();
    $scope.title = '';
    $scope.content = '';
    $scope.add = function(){
        newsList.push({
            id : newsList.length+1,
            title : $scope.title,
            content : $scope.content,
            date : new Date()
        });

        $location.path('list');
    }
})

.controller('EditCtrl',function($scope, $routeParams, $location){
    var newsList = News.all();
    $scope.news = newsList[$routeParams.id-1];
    $scope.update = function(){
        newsList[$routeParams.id-1] = $scope.news;

        $location.path('list');
    }
})

