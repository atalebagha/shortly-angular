angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $routeParams, $window, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getAllLinks()
      .then(function (links) {
        $scope.data.links = links;
        console.log(links);
      })
      .catch(function (err) {
        console.error(err);
      });
    // TODO
  };

  // $scope.openLink = function (code) {
  //   Links.goToLink(code)
  //     .then( function (result) {
  //       console.log('Success');
  //     })
  //     .catch( function (err) {
  //       console.error(err);
  //     });
  // };
  $scope.getLinks();
});
