var React = require('react');
var Jsonplaceholder = require('Jsonplaceholder');


var PhotoAlbums = React.createClass({
	 // getInitialState: function() {
  //   return {
  //     photos: ""
  //   };
  // },

	getPhotoAlbums: function(){
		var that = this;
		Jsonplaceholder.getPhotos().then(function(temp){
			//console.log("Photos ",temp);
		//	that.setState({photos: temp});


		});

	},
	render: function () {
	//	var aa = this.state;
	//	console.log(' photos ', aa);

		this.getPhotoAlbums();
	    return (
	      <h3>Photo Albums</h3>
	    )
	}
});

module.exports = PhotoAlbums;
