(function () {
  'use strict';

  angular
    .module('thinkster.posts.directives')
    .directive('post', post);

  function post() {
    var directive = {
      restricts: 'E',
      scope: {
        post: '='
      },
      templateUrl: '/static/templates/posts/post.html'
    };

    return directive
  }
})();
