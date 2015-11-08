angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function () {
    Links.createLink($scope.link)
    .then(function (result) {
      $location.path('/links');
    })
    // .then(function (resp) {
    //   $scope.link.url = '';
    // })
    .catch(function (err) {
      console.error(err);
    });
    // TODO
  };
});
