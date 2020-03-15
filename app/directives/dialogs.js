let  dialogs = ['ImportExportService', function(importExportService) {
    return {
      restrict: 'E',
      template : require('./components/dialogs.html'),
      link: function($scope) {
        $scope.importExportService = importExportService;
      }
    };
  }];

export default dialogs;
