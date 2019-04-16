import React,{Component} from 'react';
import TextFeildGroup from '../common/TextFeildGroup';
import {connect} from  'react-redux';
import {login} from '../../action/login';
import {Redirect} from 'react-router-dom';
import {app,loginCre} from '../../firebase/base';
import SignUp from '../SignUp/SignUp';

const loginStyles = {
  width:'30%',
  maxwidth:'315px',
  margin:'20px auto',
  border:'1px solid',
  borderRadius:"5px",
  padding:'10px'
}
class Login extends Component
{
  constructor(props){
    super(props);
    this.state={
     username:"",
     password :"",
     errors:{},
     isLoading:false,
     redirect:false,
     error:""

   }
  }
componentWillMount()
{
  console.log("inside login ");
}

authWithEmailPassWord(event)
{
  event.preventDefault()
console.log("aa--",this.state.username);
  const username= this.state.username
  const password=this.state.password

  app.auth().signInWithEmailAndPassword(username,password)
  .then((providers)=>
{
  this.props.history.push('/Home');
})
.catch (()=> {
  // app.auth().createUserWithEmailAndPassword(username,password)
  console.log("inside catch");
  this.setState({error:"Enter valid username and Password"})
})
}

  render()
  {
    console.log("inside log in render");
    return (
<div  style={loginStyles}>
<form onSubmit={this.authWithEmailPassWord.bind(this)}>
<h1>Login</h1>
Username:<input  type="text" name="username" onChange={e=>this.setState({username:e.target.value})}/>
Password:<input type="password" name="password" onChange={e=>this.setState({password:e.target.value})}/>
<font color="red">{this.state.error}</font>
<button className="btn btn-primary btn-lg" disable="isLoading"> Submit</button>
</form>
<a href="/SignUp">create Account</a>
</div>
    );

  }
  // LoginForm.propTypes={
  //   login:React.PropTypes.func.isRequired
  // }
  //
  // LoginForm.contextTypes ={
  //   router:React.PropTypes.func.isRequired
  // }
}
export default connect(null,{login})(Login);
