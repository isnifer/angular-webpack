export default function WebpackCtrl (WebpackService) {
    var self = this;

    self.controllerName = 'Webpack';

    self.changeName = function () {
        self.controllerName = WebpackService.changeName(self.controllerName);
    };

    WebpackService.get().then(function (response) {
        self.items = response.data;
    });
}
