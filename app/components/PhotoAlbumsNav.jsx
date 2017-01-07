var React = require('react');
var {Link, IndexLink} = require('react-router');

var PhotoAlbumsNav = React.createClass({
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

    
   
    return (
      <div className="menu">
        <div className="menu-left">
          <ul className="menu " data-tab >
            <li >
              <IndexLink to="/photoalbums" activeClassName="active"  role="tab" activeStyle={{fontWeight: 'bold'}}>Your Albums </IndexLink>
            </li>
            <li >
              <Link to="/photoalbums/examples" activeClassName="active" role="tab" activeStyle={{fontWeight: 'bold'}}>User 2</Link>
            </li>
             

          </ul>
        </div>
      </div>
    );
  }
});

module.exports = PhotoAlbumsNav;
