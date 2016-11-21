angular.module('AudioApp.controllers', [])
    .controller('HomeController', ['$scope', '$location', 'SEOService', function ($scope, $location, SEOService) {
        SEOService.setSEO({
             title: "AudioApp | home",
            //  image: "http://" + $location.host() + "/images/mario.ico",
             description: "For JP info",
             url: $location.absUrl()
         }); 
    }])
    .controller('MusicController', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams) {
        $scope.toggleDetails = function () {
            console.log('inside toggle details');
            // console.log($scope.questionid);
            if ($scope.showingDetails === true) { // if the clicked product is already showing details
                $scope.showingDetails = false; // make the clicked product not show details
                $scope.detailMode = false; // indicate that we are NOT showing details somewhere on the page
            } else { // the clicked product is not already showing details
                console.log('in else');
                // if ($scope.detailMode !== true) { // if we are NOT showing details anywhere on the page
                console.log('setting showingDetails to true');
                $scope.showingDetails = true; // show details for this product
                console.log($scope.showingDetails);
                $scope.detailMode = true; // indicate that we ARE showing details somewhere on the page
                // }
            }
        };
    }])
    .controller('CodeController', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams) {
        $scope.toggleDetails = function () {
            console.log('inside toggle details');
            // console.log($scope.questionid);
            if ($scope.showingDetails === true) { // if the clicked product is already showing details
                $scope.showingDetails = false; // make the clicked product not show details
                $scope.detailMode = false; // indicate that we are NOT showing details somewhere on the page
            } else { // the clicked product is not already showing details
                console.log('in else');
                // if ($scope.detailMode !== true) { // if we are NOT showing details anywhere on the page
                console.log('setting showingDetails to true');
                $scope.showingDetails = true; // show details for this product
                console.log($scope.showingDetails);
                $scope.detailMode = true; // indicate that we ARE showing details somewhere on the page
                // }
            }
        };
    }])
    .controller('LiteratureController', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams) {
        $scope.toggleDetails = function () {
            console.log('inside toggle details');
            // console.log($scope.questionid);
            if ($scope.showingDetails === true) { // if the clicked product is already showing details
                $scope.showingDetails = false; // make the clicked product not show details
                $scope.detailMode = false; // indicate that we are NOT showing details somewhere on the page
            } else { // the clicked product is not already showing details
                console.log('in else');
                // if ($scope.detailMode !== true) { // if we are NOT showing details anywhere on the page
                console.log('setting showingDetails to true');
                $scope.showingDetails = true; // show details for this product
                console.log($scope.showingDetails);
                $scope.detailMode = true; // indicate that we ARE showing details somewhere on the page
                // }
            }
        };
    }])