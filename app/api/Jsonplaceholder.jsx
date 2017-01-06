var axios = require('axios');

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
            return res.data;

        }, function (res) {
          throw new Error("Erro r", res);
        });

  },
  getPhotos:function(){
            var root = 'https://jsonplaceholder.typicode.com/photos';
        return axios.get(root).then(function (res) {
            return res.data;

        }, function (res) {
          throw new Error("Erro r", res);
        });

  },
  getPosts: function(){
            var root = 'https://jsonplaceholder.typicode.com/posts';
            return axios.get(root).then(function (res) {
            return res.data;

        }, function (res) {
          throw new Error("Erro r", res);
        });


  }
}
