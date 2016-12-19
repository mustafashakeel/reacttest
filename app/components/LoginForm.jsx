var React = require('react');

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
      debugger;
      this.props.onSearch(username);
      console.log("onFormSubmit", username);
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
