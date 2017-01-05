var React = require('react');
var Jsonplaceholder = require('Jsonplaceholder');

var Posts = React.createClass({
	getPostsNow:function(){
		var html = '';
		Jsonplaceholder.getPosts().then(function(temp){

        for (var i = 0; i < 10 ; i++){
         
  			html+= '<div className="row postCards">'+
		  '<div className="medium-6 columns end"> <div className="card"><div className="content">'+
		   '<span className="title"><h4>'+temp[i].title+'</h4></span>'+
		   '<p>'+temp[i].body+'</p>'+
		   '</div></div></div></div>';

          }
  
		sessionStorage.setItem('html',html);
      });
	},
  render: function () {
	var posts = this.getPostsNow();

	var posttitle = sessionStorage.getItem('html') || "";
	
    return (
    	<div style={{padding:'30px'}}>
			<div dangerouslySetInnerHTML={{__html: posttitle}} >
			</div>
		</div>
    );
  }
});

module.exports = Posts;
