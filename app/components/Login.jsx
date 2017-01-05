var React = require('react');
var LoginForm = require('LoginForm');
var WeatherMessage = require('WeatherMessage');
var Jsonplaceholder = require('Jsonplaceholder');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      users:""
    }
  },
  onFormSubmit: function (e) {

    e.preventDefault();
    var username = this.refs.username.value;

    if (username.length > 0) {
      this.refs.username.value = '';
      Jsonplaceholder.getUsers().then(function(temp){
        console.log("user entered ",username);
    
        temp.forEach(function(val){

          if (username === val.username){
            console.log("Match");
            console.log('val',val);
            sessionStorage.setItem('username', val.username);
            sessionStorage.setItem('email',val.email);
            window.location.reload();
          }else{
            console.log("not a match");
          }
        });
      });
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
          <h2> Enter User name</h2>
            <input type="text" ref="username"/>
            <input type="text" ref="password" />
            <button>Login </button>
          </form>
        </div>
    );
  }

});

module.exports = Weather;
