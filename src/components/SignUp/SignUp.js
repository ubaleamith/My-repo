import React,{Component} from 'react';
import '../../css/form.css';
import { connect }  from 'react-redux';
import { storeValue } from '../../action/DataActions';
import login from '../login/Login';
import {Redirect} from 'react-router-dom';
import {app,ref} from '../../firebase/base';

const emailRegex=RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);



const formValid = formErrors =>
{
  let valid=true;
 Object.values(formErrors).forEach(val=>{
   val.length >0 && (valid=false);
 });

console.log("form valid--",valid);
  return valid;
}

class SignUp extends Component
{

constructor(props)
{
  super(props);
  this.state ={
    firstName:null,
    lastName:null,
    email:null,
    password:null,
    formErrors :{
      firstName:"",
      lastName:"",
      email:"",
      password:""
    },
    success:""
  }
this.saveSignUpDetails=this.saveSignUpDetails.bind(this);
}

 saveSignUpDetails =() =>
{
  console.log("inisde save --",this.state.firstName);
  var data={
  firstName:this.state.firstName,
   lastName:this.state.lastName,
    email:this.state.email,
  password:this.state.password
  }
  ref.push(data)
  .then(()=>
{
  this.props.history.push('/');
})
.catch (()=> {
  // app.auth().createUserWithEmailAndPassword(username,password)
  console.log("inside sign up catch");
  this.setState({error:"Error while savig data.."})
})
}


handleSubmit = e=>
{
  e.preventDefault();
  if(formValid(this.state.formErrors))
  {
    console.log(`--Submit---,{firstName:${this.state.firstName} lastName:${this.state.lastName} email:${this.state.email} password:${this.state.password}`);
    //this.props.storeValues(this.state
    this.saveSignUpDetails()


    // app.auth().writeUserData(this.state.firstName,this.state.lastName,this.state.email,this.state.password)
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
    case 'firstName':
    formErrors.firstName =value.length < 3 ? 'minimum 3 charectors required' :"";
      break;

      case 'lastName':
      formErrors.lastName =value.length < 3 ? 'minimum 3 charectors required' :"";
        break;

        case 'email':
        formErrors.email =emailRegex.test(value) ? '' :"invalid  Email";
          break;

          case 'password':
          formErrors.password =value.length < 3 ? 'minimum 3 charectors required' :"";
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
      <div className="wrapper">
<div className="form-wrapper">
<h1>Create Account</h1>
<form onSubmit={this.handleSubmit} noValidate>

<div className="firstName">
<lable htmlFor="firstName">FirstName</lable>
<input
type="text"
className=""
placeholder="First Name"
name="firstName"
noValidate
onChange={this.handleChange}
/>
{formErrors.firstName.length>0  &&
(
  <span class="errorMessage">{formErrors.firstName}</span>
)}
</div>

<div className="lastName">
<lable htmlFor="lastName">LastName</lable>
<input
type="text"
className=""
placeholder="Last Name"
name="lastName"
noValidate
onChange={this.handleChange}
/>
{formErrors.lastName.length>0  &&
(
  <span class="errorMessage">{formErrors.lastName}</span>
)}
</div>

<div className="email">
<lable htmlFor="email">Email</lable>
<input
type="email"
className=""
placeholder="email"
name="email"
noValidate
onChange={this.handleChange}
/>
{formErrors.email.length>0  &&
(
  <span class="errorMessage">{formErrors.email}</span>
)}
</div>

<div className="password">
<lable htmlFor="password">Password</lable>
<input
type="password"
className={formErrors.firstName.length > 0 ? "error" : null}
placeholder="password"
name="password"
noValidate
onChange={this.handleChange}
/>
{formErrors.password.length>0  &&
(
  <span class="errorMessage">{formErrors.password}</span>
)}
</div>

<div className="createAccount">
<button type="submit">create Account</button>
</div>
</form>
<p align="right"><a href="/">back</a></p>

</div>
</div>

    );
  }
}



export default connect(null,{storeValue}) (SignUp);
