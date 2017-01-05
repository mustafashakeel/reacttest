var React = require('react');
var {Link, IndexLink} = require('react-router');
var Jsonplaceholder = require('Jsonplaceholder');

var Nav = React.createClass({
  onSearch: function (e) {
      e.preventDefault();

      var location = this.refs.search.value;
      var encodedLocation = encodeURIComponent(location);

      if (location.length > 0) {
        this.refs.search.value = '';
        window.location.hash = '#/?location=' + encodedLocation;
      }
  },
  render: function () {

    var username = sessionStorage.getItem('username');
    var email = sessionStorage.getItem('email');
    var loginmessage = 'Logged in as '+username+ ' ( '+ email+ ' )';

   
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu tabs" data-tab >
            <li className="tab-name">
              <IndexLink to="/posts" activeClassName="active"  role="tab" activeStyle={{fontWeight: 'bold'}}>Posts1 </IndexLink>
            </li>
            <li className="tab-name">
              <Link to="/photoalbums" activeClassName="active" role="tab" activeStyle={{fontWeight: 'bold'}}>Photo Albums</Link>
            </li>
            

          </ul>
        </div>
        <div className="top-bar-right">
          <span className="login-status">{loginmessage}</span>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
