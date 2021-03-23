
app.controller("formCtrl", function($scope,$state) {
    $scope.user={};

    $scope.submit=function(user){

        alert(JSON.stringify(user));
       
        $state.go('display',{'user':user});

    }
});
