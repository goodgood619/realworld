import React from 'react';
import './css/App.css';
import Signin from './signin';
import Signup from './signup';
import Home from './home';
import {Route} from 'react-router-dom';
import NewPost from './newpost';
import Settings from './settings';

function App() {
  return (
    <>
      <Route path = "/" component = {Home} exact = {true}/>
      <Route path = "/signin" component = {Signin} exact = {true}/>
      <Route path = "/signup" component = {Signup} exact ={true}/> 
      <Route path = "/newpost" component = {NewPost} exact = {true}/>
      <Route path = "/settings" component = {Settings} exact = {true}/>
    </>
  );
}

export default App;
