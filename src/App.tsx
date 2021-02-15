import React from 'react';
import './css/App.css';
import Signin from './SignIn/signin';
import Signup from './SignUp/signup';
import Home from './Home/home';
import {Route} from 'react-router-dom';
import NewPost from './NewPost/newpost';
import Settings from './Settings/settings';
import Profile from './Profile/profile';
import UserHome from './Home/userHome';
import UserProfile from './Profile/userProfile';
import Comment from './Comment/comment';

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
      <Route path = "/comment" component = {Comment} exact={true}/>
    </>
  );
}

export default App;
