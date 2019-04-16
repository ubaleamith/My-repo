import React,{Component} from 'react';
import '../../css/form.css';
import { connect }  from 'react-redux';
import { storeValue } from '../../action/DataActions';
import login from '../login/Login';
import {Redirect} from 'react-router-dom';
import firebase from 'firebase';

import {app,ref,ref2} from '../../firebase/base';




const formValid = formErrors =>
{
  let valid=true;
 Object.values(formErrors).forEach(val=>{
   val.length >0 && (valid=false);
 });

console.log("form valid--",valid);
  return valid;
}

class UploadVideo extends Component
{

constructor(props)
{
  super(props);
  this.state ={
    videoTitle:null,
    videoDesc:null,
    startTime:null,
    endTime:null,
    userId:null,
    videoURl:null,
    formErrors :{
      videoTitle:"",
      videoDesc:"",
      startTime:"",
      endTime:"",
      videoURl:""
    },
    success:""
  }
this.saveUploadVideoDetails=this.saveUploadVideoDetails.bind(this);
}
 saveUploadVideoDetails =() =>
{
  var user = firebase.auth().currentUser.email;
  console.log("inisde user --",user);

  console.log("inisde save --",this.state.videoURl);
  var data={
  videoTitle:this.state.videoTitle,
   videoDesc:this.state.videoDesc,
    startTime:this.state.startTime,
  endTime:this.state.endTime,
  videoURl:this.state.videoURl,
  userId:user
  }
    console.log("ref---",ref);

  ref2.push(data)
  .then(()=>
{
  console.log("inide then -----");
  this.props.history.push('/');
})
.catch (()=> {
  console.log("inide catch -----");

  // app.auth().createUserWithstartTimeAndendTime(username,endTime)
  console.log("inside sign up catch");
  this.setState({error:"Error while savig data.."})
})
}


handleSubmit = e=>
{
  console.log("inside submit");
  e.preventDefault();
  if(formValid(this.state.formErrors))
  {
    console.log(`--Submit---,{videoTitle:${this.state.videoTitle} videoDesc:${this.state.videoDesc} startTime:${this.state.startTime} endTime:${this.state.endTime}`);
    //this.props.storeValues(this.state
    this.saveUploadVideoDetails()


    // app.auth().writeUserData(this.state.videoTitle,this.state.videoDesc,this.state.startTime,this.state.endTime)
    // console.log("after create in signup");
    // this.setState({success:"Registration Done Successfully..." })


  }
  else {
    console.error('Error while submitting');
  }
}

handleChange = e =>
{
  e.preventDefault();
  const{name, value}=e.target;
  let formErrors=this.state.formErrors;

  switch (name) {
    case 'videoTitle':
    formErrors.videoTitle =value.length < 3 ? 'minimum 10 charectors required' :"";
      break;

      case 'videoDesc':
      formErrors.videoDesc =value.length < 3 ? 'minimum 100 charectors required' :"";
        break;

        case 'startTime':
        formErrors.startTime =value.length < 2 ? 'enter valid start time' :"";
          break;

          case 'endTime':
          formErrors.endTime =value.length < 2 ? 'enter valid end time' :"";
            break;
    default:
break;
  }
  this.setState({formErrors,[name]:value },() => console.log(this.state))

}


  render()
  {
     const {formErrors}=this.state;
    return(
      <div className="wrapper1">
<div className="form-wrapper1">
<h1>Upload Video</h1>
<form onSubmit={this.handleSubmit} noValidate>

<div className="videoTitle">
<lable htmlFor="videoTitle">videoTitle</lable>
<input
type="text"
className=""
placeholder="Video Title"
name="videoTitle"
noValidate
onChange={this.handleChange}
/>
<br/><br/>
{formErrors.videoTitle.length>0  &&
(
  <span class="errorMessage">{formErrors.videoTitle}</span>
)}
</div>

<div className="videoDesc">
<lable htmlFor="videoDesc">videoDesc</lable>
<input
type="text"
className=""
placeholder="Video Desc"
name="videoDesc"
noValidate
onChange={this.handleChange}
/>
<br/><br/>
{formErrors.videoDesc.length>0  &&
(
  <span class="errorMessage">{formErrors.videoDesc}</span>
)}
</div>

<div className="startTime">
<lable htmlFor="startTime">startTime</lable>
<input
type="text"
className=""
placeholder="startTime"
name="startTime"
noValidate
onChange={this.handleChange}
/>
<br/><br/>
{formErrors.startTime.length>0  &&
(
  <span class="errorMessage">{formErrors.startTime}</span>
)}
</div>

<div className="endTime">
<lable htmlFor="endTime">endTime</lable>
<input
type="text"
className={formErrors.videoTitle.length > 0 ? "error" : null}
placeholder="endTime"
name="endTime"
noValidate
onChange={this.handleChange}
/>
<br/><br/>
{formErrors.endTime.length>0  &&
(
  <span class="errorMessage">{formErrors.endTime}</span>
)}
</div>


<div className="videoURl">
<lable htmlFor="videoURl">videoURl</lable>
<input
type="text"
className={formErrors.videoURl.length > 0 ? "error" : null}
placeholder="video URl"
name="videoURl"
noValidate
onChange={this.handleChange}
/>
<br/><br/>
{formErrors.endTime.length>0  &&
(
  <span class="errorMessage">{formErrors.videoURl}</span>
)}
</div>

<div >
<button >Upload</button>
</div>
</form>
<p align="right"><a href="/Home">back</a></p>

</div>
</div>

    );
  }
}



export default connect(null,{storeValue}) (UploadVideo);
