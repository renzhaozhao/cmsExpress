angular.module('app')

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