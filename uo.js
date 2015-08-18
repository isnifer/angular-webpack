import controller from './controller';
import service from './service';

angular.module('uo', [])
    .service('WebpackService', ['$http', service])
    .controller('WebpackCtrl', ['WebpackService', controller]);
