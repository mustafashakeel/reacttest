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
  handleLogin: function (user) {

    var that = this;



    this.setState({isLoading: true});



  Jsonplaceholder.getUsers().then(function(temp){
  console.log("user entered ",user);
    // that.setState({
    //   users:temp
    // });
  temp.forEach(function(val){

    if (user === val.username){
      console.log("Match");
      sessionStorage.setItem('username', val.username);
      that.LoginTrue();

    }else{
      console.log("not a match");
    }


  });
  });





    // Jsonplaceholder.getTemp(location).then(function (temp) {
    //   that.setState({
    //     location: location,
    //     temp: temp,
    //     isLoading: false
    //   });
    // }, function (errorMessage) {
    //   that.setState({isLoading: false});
    //   alert(errorMessage);
    // });
  },
  checkUser:function(){
    alert("ASD");
  },
  getUsersforValidation:function(){

    var that = this;

    Jsonplaceholder.getUsers().then(function(temp){
      var Users = [];
        //
        // temp.data.forEach(function(element) {
        //   Users.push(element.username);
        //
        // // console.log(" Great ", element.username);
        // // this.Username += element.username;
        // });
      //  console.log("Users",Users);

    });
  },
  // LoginTrue:function(){
  //         var login = null;
  //         login = sessionStorage.getItem('username');
  //         console.log("login",login);
  //         if(login){
  //
  //         }else{
  //           alert("fail");
  //         }
  //
  // },
  render: function () {




    this.LoginTrue = function(){
            var login = null;
            login = sessionStorage.getItem('username');
            console.log("login",login);
            if(login){
              return (
                <div>
                  <h3>Weather Component</h3>
                  Awesome
                </div>
              );
            }else{
              return (
                <div>
                  <h3>Weather Component</h3>
                  <LoginForm onSearch={this.handleLogin} />
                  {renderMessage()}
                </div>
              )
            }

    }

    //
    // function loginSuccess(){
    //         var login = null;
    //         login = sessionStorage.getItem('username');
    //         console.log("login",login);
    //         if(login){
    //           alert("Successssssssss");
    //         }else{
    //           alert("fail");
    //         }
    //
    // }

    function LoginUser(props){
      function renderMessage () {
        if (isLoading) {
          return <h3>Fetching weather...</h3>;
        } else if (temp && location) {
          return <WeatherMessage temp={temp} location={location}/>;
        }
      }
        const isLoggedIn = props.isLoggedIn;
      if(isLoggedIn){

        return (
          <div>
            <h3>Congrats you are logged in </h3>

          </div>
        )


      }
      console.log(this.props);

      return (
        <div>
          <h3>Weather Component</h3>

          <LoginForm onSearch={this.handleLogin} />
          
          {renderMessage()}
        </div>
      )


    }


    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
var userflag = sessionStorage.getItem('username');
var uflag = false;
if(userflag){

  uflag = true;
}
    return (
      <div>
        <h3>Weather Component</h3>
        <LoginUser isLoggedIn={uflag} onSearch={this.handleLogin}/>


      </div>
    )
  }
});

module.exports = Weather;
