app.controller('displayCtrl',function($scope,$stateParams){
	

  $scope.master={};

  $scope.master=angular.copy($stateParams.user);

  
  alert(JSON.stringify( $scope.master));
 console.log("this is data>>"+JSON.stringify($scope.master));
 if($scope.master==null)
 {
 	alert("hii");
 	$state.go("/login");
 }
 else
 	$scope.fName = $scope.master.fname;
 $scope.mname = $scope.master.mname;
 $scope.lname = $scope.master.lname;
 $scope.email = $scope.master.email;
 $scope.cno=$scope.master.cno;
 $scope.address=$scope.master.address;

});




               

