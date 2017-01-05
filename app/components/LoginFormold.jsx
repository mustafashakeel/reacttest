var React = require('react');
var Jsonplaceholder = require('Jsonplaceholder');


var LoginForm = React.createClass({
  // getDefaultProps:function(){
  //   return {
  //     onSearch:"onSearch"
  //   }
  // },
  onFormSubmit: function (e) {

    e.preventDefault();

    var username = this.refs.username.value;

    if (username.length > 0) {
      this.refs.username.value = '';
      
    
      //debugger;
      // this.props.onSearch(username);
      // console.log("onFormSubmit", username);

      Jsonplaceholder.getUsers().then(function(temp){
  console.log("user entered ",username);
    // that.setState({
    //   users:temp
    // });
  temp.forEach(function(val){

    if (username === val.username){
      console.log("Match");
      sessionStorage.setItem('username', val.username);
      window.location.reload();
      //that.LoginTrue();

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
            <input type="text" ref="username"/>
            <input type="text" ref="password" />
            <button>Login </button>
          </form>
        </div>
    );
  }
});

module.exports = LoginForm;
