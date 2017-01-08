var React = require('react');
var Jsonplaceholder = require('Jsonplaceholder');
// var {Link, IndexLink} = require('react-router');

var PhotoAlbumsNav = React.createClass({
  getInitialState:function(){
    return {
      navMenu:''
    }
  },
  handme:function(e){
    // e.preventDefault();

console.log("asdfadsfasd");
    e.preventDefault();

  },

  componentDidMount:function(){
         var that = this;
    (function navLinks(){

    Jsonplaceholder.getUsers().then(function(temp){
      
      var html = '';
      for(var i = 0; i < temp.length; i++){
   html +='<li ><a href="#'+temp[i].id+'" >'+temp[i].name+'</a></li>';

      }
      that.setState({navMenu:html});

    });     
    })();
 

  },

  render:function(){
    //this.getUsersNav();
    var menu = this.state.navMenu;
    // console.log("links ",aa);
    return(
       <div className="menu">
        <div className="menu-left">
          <ul className="menu " onClick={this.props.getLink} dangerouslySetInnerHTML={{__html: menu}} onInput={this.navLinks} >


            
          </ul>
          <ul>
          <li>< a href="mustafa" onClick={this.props.getLink}>Mustafa</a></li>
          <li>< a href="eisa" onClick={this.props.getLink}>eisa</a></li>
          </ul>
          
        </div>
      </div>

    );

  }


//   onSearch: function (e) {
//       e.preventDefault();

//       var location = this.refs.search.value;
//       var encodedLocation = encodeURIComponent(location);

//       if (location.length > 0) {
//         this.refs.search.value = '';
//         window.location.hash = '#/?location=' + encodedLocation;
//       }
//   },  
//   render: function () {

    
   
//     return (
//       <div className="menu">
//         <div className="menu-left">
//           <ul className="menu " data-tab >
//             <li >
//               <IndexLink to="/photoalbums" activeClassName="active"  role="tab" activeStyle={{fontWeight: 'bold'}}>Your Albums </IndexLink>
//             </li>
//             <li >
//               <Link to="/photoalbums/examples" activeClassName="active" role="tab" activeStyle={{fontWeight: 'bold'}}>User 2</Link>
//             </li>
             
//       </div>
//     );
//   }
});

module.exports = PhotoAlbumsNav;
