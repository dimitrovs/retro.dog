let pageHeader = ['ModalService', function(modalService) {
    return {
      template : require('./components/header.html'),
      link: function($scope) {
        $scope.modalService = modalService;
      }
    };
  }];
export default pageHeader;