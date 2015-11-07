angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getAllLinks()
      .then(function (links) {
        $scope.data.links = links;
      })
      .catch(function (err) {
        console.error(err);
      });
    // TODO
  };
  $scope.getLinks();
});
