var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Fincad = require('Fincad');
var About = require('About');
var Examples = require('Examples');

var Test = React.createClass({
render:function(){
	return(
		<div>
		<h2>Great</h2>
		</div>);
}
});


var username = sessionStorage.getItem('username') || false;
console.log('session username', username);
// var username = false;
if (username){
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Fincad}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

//ReactDOM.render(<Test />,document.getElementById('app'));
}else{


ReactDOM.render(
<Fincad />,
  document.getElementById('app')
);

//   <Router history={hashHistory}>
//     <Route path="/" component={Main}>
//       <Route path="about" component={About}/>
//       <Route path="examples" component={Examples}/>
//       <IndexRoute component={Fincad}/>
//     </Route>
//   </Router>,
//   document.getElementById('app')
// );


}

