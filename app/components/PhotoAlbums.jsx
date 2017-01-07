var React = require('react');
var PhotoAlbumsNav = require('PhotoAlbumsNav');

var PhotoAlbums = React.createClass({
  render: function () {
     return (
      <div>
        <PhotoAlbumsNav />
        {this.props.children}
      </div>
    );
  }
});

module.exports = PhotoAlbums;



// var React = require('react');
// var Jsonplaceholder = require('Jsonplaceholder');
// var Main = require('Main');


// var PhotoAlbums = React.createClass({
// 	 getInitialState: function() {
//     return {
//       photos: ""
//     };
//   },
//   componentDidMount:function(){
//   			var that = this;
// 		Jsonplaceholder.getPhotos().then(function(temp){
// 			console.log("Photos ",temp);
	
// 		var aa = sessionStorage.getItem('id');
// 		console.log(' ID ',aa);		
// 		for (var item in temp){
// 			//	console.log("item ",item);
// 		}



// 		that.setState({photos: temp});



// 		});



//   },

// 	getPhotoAlbums: function(){
// 		var that = this;
// 		Jsonplaceholder.getPhotos().then(function(temp){
// 			//console.log("Photos ",temp);
// 		//	that.setState({photos: temp});


// 		});

// 	},
// 	render: function () {
// 		var aa = this.state;
// 		console.log(' photos ', aa);

// 		this.getPhotoAlbums();
// 	    return (<div>
// 	      <h3>Photo Albums</h3>
// 	      <Main />
// 	      </div>
// 	    )
// 	}
// });

// module.exports = PhotoAlbums;
