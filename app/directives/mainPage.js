let mainPage = ['ModalService', function(modalService) {
    return {
      restrict: 'E',
      template : require('./components/mainPage.html'),
      link: function($scope) {
        $scope.modalService = modalService;
      }
    };
  }];

export default mainPage;