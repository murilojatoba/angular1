angular.module('helloWorldApp').controller('helloWorldCtrl', function($scope){
    $scope.message = 'Hello World!';

});


angular.module('helloWorldApp').controller('MainCtrl', function($scope){
    $scope.message = 'Main';

});


angular.module('helloWorldApp').controller('ShowCtrl', function($scope){
    $scope.message = 'Show';
    
});
