(function() {

angular.module('app')
//Controller manages viewing array of Gallery Photos
.controller('GalleryController', function($scope){
	$scope.photos = gallery;

	// initial image index
	$scope._Index = 0;

	// if a current image is the same as requested image
	$scope.isActive = function (index) {
		return $scope._Index === index;
	};

	// show prev image
	$scope.showPrev = function () {
		if($scope._Index > 0) {
			$scope._Index--;
		} else {
			$scope._Index = $scope.photos.length - 1;
		}
	};

	// show next image
	$scope.showNext = function () {
		if($scope._Index < $scope.photos.length - 1) {
			$scope._Index++;
		} else {
			$scope._Index = 0;
		}
	};

	// show a certain image
	$scope.showPhoto = function (index) {
		$scope._Index = index;
	};
});

})();