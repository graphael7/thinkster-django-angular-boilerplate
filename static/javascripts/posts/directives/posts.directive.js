(function () {
  'use strict';

  angular
    .module('thinkster.posts.directives')
    .directive('posts', posts);

  function posts() {
    var directive = {
      controller: 'PostsController',
      controllerAs: 'vm',
      restricts: 'E',
      scope: {
        posts: '='
      },
      templateUrl: '/static/templates/posts/posts.html'
    };

    return directive
  }
})();
