var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Login = require('Login');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')


var username = sessionStorage.getItem('username') || false;
console.log('session username', username);
// var username = false;
if (username){
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
    
    </Route>
  </Router>,
  document.getElementById('app')
);


}else{


ReactDOM.render(
<Login />,
  document.getElementById('app')
);



}

