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

    var name = sessionStorage.getItem('name');
    var email = sessionStorage.getItem('email');
    var loginmessage = 'Logged in as '+name+ ' ( '+ email+ ' )';

   
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu tabs" data-tab >
            <li className="tab-name">
              <IndexLink to="/" activeClassName="active"  role="tab" activeStyle={{fontWeight: 'bold'}}>Posts </IndexLink>
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
