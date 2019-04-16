import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {app,ref} from '../firebase/base';
import Rebase from 're-base';
import firebase from 'firebase';

import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';


class SearchData extends  Component
{

constructor(props)
{
  super(props);
  this.state={
        email:[]
  }

}
SubmitSearchDetails=()=>
{
  alert('hiiii');

  ref.once('value',
  snapshot => {
        snapshot.forEach(child =>{
          this.setState({
              email: this.state.email.concat([child.key]),
          });
        })
      })
}
  render()
  {


    return(
<div align="center" style={{marginBottom:'50%'}}>
<input type="textBox" nama="searchBox"/>
<button onClick={this.SubmitSearchDetails.bind(this)}>Submit</button>
<p>
<ol id="userList">{this.state.email}</ol>
</p>
</div>
    );


  }
}

export default SearchData;
