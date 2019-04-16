import React,{Component} from 'react';
import TextFeildGroup from '../common/TextFeildGroup';
import {connect} from  'react-redux';
import {login} from '../../action/login';
const loginStyles = {
  width:'30%',
  maxwidth:'315px',
  margin:'20px auto',
  border:'1px solid',
  borderRadius:"5px",
  padding:'10px'
}
class LoginForm extends Component
{
  constructor(props){
    super(props);
    this.state={
     username:"",
     password :"",
     errors:{},
     isLoading:false
   };
  }




  onSubmit(e){
    e.preventDefault();
  if(this.isValid())  {
      this.setState({errors:{},isLoading:true});
      this.props.login(this.state).then(
(res) =>this.context.router.push('/'),
(err) => this.setState({errors:err.data.errors,isLoading:false})
      );
    }
  }


  onChange(e)
  {
    this.setState({[e.target.name]:e.target.value})
  }
  render()
  {
    return (
<div  style={loginStyles}>
<form onSubmit={this.onSubmit}>
<h1>Login</h1>
Username:<input  type="text" name="username" onChange={this.onChange} />
Password:<input type="password" name="password" onChange={this.onChange}/>

<button className="btn btn-primary btn-lg" disable="isLoading"> Submit</button>
</form>
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
export default connect(null,{login})(LoginForm);
