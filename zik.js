import controller from './controller';
import service from './service';

angular.module('zik', [])
    .service('WebpackService', ['$http', service])
    .controller('WebpackCtrl', ['WebpackService', controller]);
