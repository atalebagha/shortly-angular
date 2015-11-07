angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, Links) {
  // Your code here
  $scope.links = {};
  $scope.getLinks = function() {
    Links.getAllLinks()
      .then(function (links) {
        $scope.links = links;
        console.log(links);
      })
      .catch(function (err) {
        console.error(err);
      });
    // TODO
  };

  $scope.openLink = function (code) {
    Links.goToLink(code)
      .then( function (result) {
        console.log('Success');
        $window.open(result.url);
      })
      .catch( function (err) {
        console.error(err);
      })
  }
  $scope.getLinks();
});
