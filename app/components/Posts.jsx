var React = require('react');
var Jsonplaceholder = require('Jsonplaceholder');

var Posts = React.createClass({
	getPostsNow:function(){
		var title =[];
		var body = [];
		var posts = {};
		var post ='';
		// this.html='';
		var html = '';
		Jsonplaceholder.getPosts().then(function(temp){

			
        console.log("posts ",temp);
		// posts = temp;
	
		// '<div className="row">'+
  // '<div class="medium-4 columns">'+
  //  '<span className="title">Road Warrior</span>'+


        for (var i = 0; i < 10 ; i++){
  //       
  			html+= '<div className="row postCards">'+
  '<div className="medium-6 columns end"> <div className="card"><div className="content">'+
   '<span className="title"><h4>'+temp[i].title+'</h4></span>'+
   '<p>'+temp[i].body+'</p>'+
   '</div></div></div></div>'

        	console.log(" body ",temp[i].body);
        	// title.push(temp[i].title);
        	// body.push(temp[i].body);
         //posts.push(temp[i]);


        // 	// console.log('body',temp[i].body);
         }
         //return html;


        // posts.title = title;
        // posts.body = body;
       // posts = html
//return html
	posts[html] = html;
	post += html
	sessionStorage.setItem('html',html);
	
	
        
      });



		return posts;

	},
  render: function () {
	var posts = this.getPostsNow();
	var html ='';
	var posts ={};

var posttitle = sessionStorage.getItem('html') || "";



    return (<div style={{padding:'30px'}}>
<div dangerouslySetInnerHTML={{__html: posttitle}} >

</div>
</div>
    );
  }
});

module.exports = Posts;
