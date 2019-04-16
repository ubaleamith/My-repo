import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter , Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import LoginForm from './components/login/LoginForm';
import Login from './components/login/Login';
import LogOut from './components/login/logout';
import SignUp from './components/SignUp/SignUp';
import SignUpRedux from './components/SignUp/SignUpRedux';
import SearchRecord from './components/SearchRecord';
import {app,base } from './firebase/base'
import VideoList from './components/videos/VideoList';
import UploadVideo from './components/videos/uploadVideo';

import { Spinner } from '@blueprintjs/core';

class App extends Component {

constructor()
{
  super();
  this.state={
    authenticated:false,
    loading :true
  };
}
componentWillMount()
{
  this.removeAuthListner=app.auth().onAuthStateChanged((user) =>
  {
    if(user)
    {
      this.setState({
        authenticated:true
      })
    }
    else {
      this.setState({
        authenticated:false
      })
    }
  })
}

componentWillUnmount()
{
this.removeAuthListner();
}

  render() {
// if(this.state.loading===true)
// {
//   return (
//     <div style={{textAlign:"center",position:"absolute" ,top:"25%",left:"50%"}}>
// <h3>Loading...</h3>
// <Spinner/>
//     </div>
//   )
// }

console.log("auth--",this.state.authenticated);
    return (
      <BrowserRouter>
      <Provider store={store}>
      <div className="App">

  <NavBar authenticated={this.state.authenticated}/>
{this.state.authenticated?(
<div>
            <Route path='/Home' component={Home}/>
          <Route path="/UploadVideo" component={UploadVideo}/>
            <Route path='/LogOut' component={LogOut}/>
            </div>
)
:(
  <div>
      <Route exact path='/' component={Login}/>
      <Route  path='/SignUp' component={SignUp}/>
      </div>
)
}

      </div>
      </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
