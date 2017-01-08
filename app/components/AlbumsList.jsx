var React = require('react');

var AlbumsList = React.createClass({
  render: function () {
  	var userid = this.props.userid;
  	console.log('userid albums list' , userid);
    return (
      <h3>Albums Lists Component <span>{userid}</span></h3>
    )
  }
});

module.exports = AlbumsList;
