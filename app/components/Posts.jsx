var React = require('react');
var Jsonplaceholder = require('Jsonplaceholder');

var Posts = React.createClass({
	 getInitialState: function() {
    return {
      posts: ""
    };
  },componentDidMount: function () {
  		var that = this;
	

		var html = '';
	var postit = Jsonplaceholder.getPosts().then(function(temp){
	

        for (var i = 0; i < 10 ; i++){
         
  			html+= '<div className="row postCards">'+
		  '<div className="medium-6 columns end"> <div className="card"><div className="content">'+
		   '<span className="title"><h4>'+temp[i].title+'</h4></span>'+
		   '<p>'+temp[i].body+'</p>'+
		   '</div></div></div></div>';

          }

		that.setState({posts:html});
      });

  },

  render: function () {

  	var postit = this.state.posts;
  	
    return (
    	<div style={{padding:'30px'}}>
			<div dangerouslySetInnerHTML={{__html: this.state.posts}} >
			</div>
		</div>
    );
  }
});

module.exports = Posts;
