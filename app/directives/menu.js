let menu = ['VoteService', function (voteService) {
  return {
    template : require('./components/menu.html'),
    link: function ($scope) {
      $scope.voteService = voteService;
    }
  };
}];

export default menu;
