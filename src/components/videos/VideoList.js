import React,{Component} from 'react';
import firebase from 'firebase';

import {app,ref,ref2,listData} from '../../firebase/base';

class VideoList extends Component
{

  componentDidMount()
  {
    console.log("inside video list");
    firebase.database().ref('/videoDetails').on('value', data => {
         console.log('data: ', data);
     })
  }



render()
{
  function test()
  {

    firebase.database().ref('/videoDetails').on('value', data => {
         console.log('data: ', data);
     })
  }
  return(
<div>
<h1>Video Details List</h1>
</div>
  );
}
}
 export default VideoList;
