angular.module('shortly.services', [])

.factory('Links', function ($http) {
  // Your code here
  // createLink
  var createLink = function(link) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  // goToLink
  var goToLink = function(code) {
    return $http({
      method: 'GET',
      url: '/api/links/' + code
    }).then(function(resp) {
      return resp.data;
    });
    //then resp.data.navToLink  $Location.path(res.data.navToLink);
  };

  var getAllLinks = function() {
    return $http({
      method: 'GET',
      url: '/api/links'
    }).then(function (resp) {
      return resp.data;  // user == user
    });
  };

  return {
    createLink: createLink,
    goToLink: goToLink,
    getAllLinks: getAllLinks
  };
  // getAllLinks
  
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
