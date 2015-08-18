export default function JetpackCtrl (JetpackService) {
    var self = this;

    self.controllerName = 'Jetpack';

    self.changeName = function () {
        self.controllerName = JetpackService.changeName(self.controllerName);
    };

    JetpackService.get().then(function (response) {
        self.items = response.data;
    });
}
