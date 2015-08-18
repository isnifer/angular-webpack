var modules = ['jetpack', 'webpack'];

modules.forEach(function (e) {
    require('./' + e + '/module.js');
})

angular.module('uo', modules);
