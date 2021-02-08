import React from 'react';
import './css/App.css';
import Signin from './signin';
import Signup from './signup';
import Home from './home';
import {Route} from 'react-router-dom';
import NewPost from './newpost';
import Settings from './settings';
import Profile from './profile';
import UserHome from './userHome';
import UserProfile from './userProfile';

function App() {
  return (
    <>
      <Route path = "/" component = {Home} exact = {true}/>
      <Route path = "/signin" component = {Signin} exact = {true}/>
      <Route path = "/signup" component = {Signup} exact ={true}/> 
      <Route path = "/newpost" component = {NewPost} exact = {true}/>
      <Route path = "/settings" component = {Settings} exact = {true}/>
      <Route path = "/userHome" component = {UserHome} exact = {true}/>
      <Route path = "/profile/:userName"  component = {Profile} exact = {true}/>
      <Route path = "/userprofile" component = {UserProfile} exact = {true}/>
    </>
  );
}

export default App;
