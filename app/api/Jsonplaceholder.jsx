var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';

module.exports = {
  getTest:function(){
    		var root = 'https://jsonplaceholder.typicode.com/users';
        return axios.get(root).then(function (res) {
          //console.log("Dataaaa",res);
            return res;

        }, function (res) {
          throw new Error("Erro r", res);
        });


  },
  getUsers:function(){
        var root = 'https://jsonplaceholder.typicode.com/users';
        return axios.get(root).then(function (res) {
      //    console.log("Dataaaa",res.data);
            return res.data;

        }, function (res) {
          throw new Error("Erro r", res);
        });




  },
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
