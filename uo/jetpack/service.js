export default function JetpackService ($http) {
    function changeName (name) {
        return name === 'Jetpack' ? 'Webpack' : 'Jetpack';
    }

    function get () {
        return $http.get('http://beta.json-generator.com/api/json/get/OH7O3dy').then(function (data) {
            return data;
        });
    }

    return {
        changeName: changeName,
        get: get
    };
}
