import React from 'react';
import './css/App.css';
import Signin from './views/pages/SignIn/signin';
import Signup from './views/pages/SignUp/signup';
import Home from './views/pages/Home/home';
import {Route} from 'react-router-dom';
import NewPost from './views/pages/NewPost/newpost';
import Settings from './views/pages/Settings/settings';
import Profile from './views/pages/Profile/profile';
import UserHome from './views/pages/Home/userHome';
import UserProfile from './views/pages/Profile/userProfile';
import Comment from './views/pages/Comment/comment';

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
