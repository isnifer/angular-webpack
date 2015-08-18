import controller from './controller';
import service from './service';

angular.module('webpack', [])
    .service('WebpackService', ['$http', service])
    .controller('WebpackCtrl', ['WebpackService', controller]);
