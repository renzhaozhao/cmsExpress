var app = angular.module('app.news', [])

.factory('News', function(){
    var newsList = [{
        id : 1,
        title : 'title 1111',
        content : 'content 1111111',
        date : new Date()
    },{
        id : 2,
        title : 'title 2222',
        content : 'content 2222222',
        date : new Date()
    },{
        id : 3,
        title : 'title 3333',
        content : 'content 3333333',
        date : new Date()
    },{
        id : 4,
        title : 'title 4444',
        content : 'content 4444444',
        date : new Date()
    },{
        id : 3,
        title : 'title 5555',
        content : 'content 5555555',
        date : new Date()
    },{
        id : 3,
        title : 'title 6666',
        content : 'content 6666666',
        date : new Date()
    },{
        id : 3,
        title : 'title 7777',
        content : 'content 7777777',
        date : new Date()
    }];

    return {
        all: function(){
            return newsList;
        }
    };
})

.controller('NewsCtrl', function($scope,NewsService){
    $scope.news = {
        title: '',
        content: ''
    };
    $scope.sendNews = function(){
        NewsService.save(
            $scope.news,
            function(data){
                console.log(data);
                alert('提交成功');
                $scope.news = {
                    title: '',
                    content: ''
                };
            },
            function(err){
                console.error(err);
            }
        )
    }


    $scope.list = [];

    $scope.loadNews = function(){
        NewsService.list('',function(data){
            //console.log(data);
            $scope.list = data;
        });
    }

    $scope.loadNews();
})

.controller('ListCtrl',function($scope,News){
    $scope.newsList = News.all();
})

.controller('DetailCtrl',function($scope,$routeParams,News){
    $scope.news = News.all()[$routeParams.id-1];
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

