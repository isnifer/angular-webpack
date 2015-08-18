var modules = ['jetpack'];

modules.forEach(function (e) {
    require('./' + e + '/module.js');
});

angular.module('zik', modules);
