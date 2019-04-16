import _ from 'lodash';
import React,{Component ,PropTypes} from 'react';
// import { reduxFrom } from 'redux-form';



const FIELDS={
  firstName:{
    type:'input',
    lable:'FirstName'
  },
lastName:{
  type:'input',
  lable:'LastName'
},
email:{
  type:'email',
  lable:'Email'
},
password:{
  type:'password ',
  lable:'Password'
},
}

class SignUpRedux extends Component
{
renderfield(fieldConfig,field)
{
  const fieldHelper=this.props.fields[field];

  return(
<div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger':''}`}>
<lable>{fieldConfig.lable}</lable>
  <fieldConfig.type type="text" className="form-control" {...fieldHelper}/>
  <div>
{fieldHelper.touched ? fieldHelper.error :''}
  </div>
  </div>

  );
}

  render()
  {
    const {handleSubmit}=this.props;
    return (
      <form onSubmit={handleSubmit(props=>this.onSubmit(props))}>
<h1>Create new Account</h1>
{_.map(FIELDS,this.renderfield.bind(this))}
<button type="submit" className="btn btn-primary">Submit</button>
      </form>

    );
  }

}
 function validate (values)
 {
   const errors={};

   _.each(FIELDS,(type,field)=>{
   if(!values[field]){
     errors[field]=`Enter a ${field}`
   }
 });
 return errors;
 }

// export default reduxFrom({
//   form :'SignUp',
//   fields :_.keys(FIELDS),
// validate
// })(SignUpRedux);
