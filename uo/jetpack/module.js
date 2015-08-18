import controller from './controller';
import service from './service';

angular.module('jetpack', [])
    .service('JetpackService', ['$http', service])
    .controller('JetpackCtrl', ['JetpackService', controller]);
