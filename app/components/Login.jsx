var React = require('react');
var LoginForm = require('LoginForm');
var WeatherMessage = require('WeatherMessage');
var Jsonplaceholder = require('Jsonplaceholder');

var Login = React.createClass({
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
 
    
        temp.forEach(function(val){

          if (username === val.username){
            
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
        <div className="loginform">
          <form onSubmit={this.onFormSubmit}>
          <div className="row">
           <div className="small-3 columns">
          <h3> User Login </h3>
          </div>
          </div>
          <div className="row">
           <div className="small-3 columns">
         
            <input type="text" ref="username" placeholder="User Name (required )"/>
            </div>
          </div>
            <div className="row">
              <div className="small-3 columns">

            <input type="text" ref="password" placeholder="password (optional )"/>
            </div>
            </div>
            <div className="row">
               <div className="small-3 columns">
            <button className="button">Login </button>
            </div>
            </div>
          </form>
        </div>
    );
  }

});

module.exports = Login;
