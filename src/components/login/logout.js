import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Spinner} from '@blueprintjs/core';
import {app} from '../../firebase/base';
class Logout  extends Component{
constructor()
{
  super()
  this.state={
    redirect:false
  }
}
componentWillMount()
{
  console.log("this.componentWillMount.redirect --",this.state.redirect );
  app.auth().signOut().then((user)=>{
    this.setState({redirect:true});
    console.log("afetr state set --",this.state.redirect );
  });
}

  render(){
    console.log("this.state.redirect111 --",this.state.redirect );
      if(this.state.redirect === true)
      {
       return  <Redirect to="/" />
      }
      return(
        <div style={{textAlign:"center",position:"absolute" ,top:"25%",left:"50%"}}>
    <h3>logging out...</h3>
    <Spinner/>
    </div>
    )
  }
}


export default Logout;
