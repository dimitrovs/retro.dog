let sidebar = ['ModalService', function(modalService) {
    return {
      template : require('./components/sidebar.html'),
      link: function($scope) {
        $scope.modalService = modalService;
      }
    };
  }];

export default sidebar;