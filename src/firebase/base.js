import Rebase from 're-base';
import firebase from 'firebase';
import VideoList from '../components/videos/VideoList'

const config={
  apiKey: "AIzaSyB-isFB5xMrE4cxFAl452bgbNM_MDsCz-Q",
authDomain: "forkproj-befd5.firebaseapp.com",
databaseURL: "https://forkproj-befd5.firebaseio.com",
projectId: "forkproj-befd5",
storageBucket: "forkproj-befd5.appspot.com",
messagingSenderId: "1091485857722"
};

const app=  firebase.initializeApp(config);
const database=firebase.database();
const ref=database.ref('signUpDetails');
const ref2=database.ref('videoDetails');

const loginCre=app.database().ref().child("email" &&  "password");
const base=Rebase.createClass(app.database());
ref2.once('value',gotdata,errdata)

const rootref=firebase.database().ref().child('signUpDetails');
 function gotdata(data)
{
  console.log("videolist data");
  console.log(data.val());
}


 function errdata (err)
{
  console.log("inside err");
  console.log(err);
}



export {app,base,ref,loginCre,ref2}
