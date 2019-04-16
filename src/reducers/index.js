import {STORE_DATA} from '../action/types';
import {STORE_ACTIVITY_DATA} from '../action/types';
import {STORE_SIGNUP_DATA} from '../action/types';


const initState={
  highlights:[],
  activitys:[],
  formData :{
    firstName:"",
    lastName:"",
    email:"",
    password:""
  }
}
const reducer = (state=initState,action) =>{
  console.log("action---",action);
  switch (action.type) {
    case STORE_DATA:
    console.log("highlights--",action.payload);
      return{
        ...state,
        highlights:action.payload.highlights
      }
      case STORE_ACTIVITY_DATA:
      console.log("activitys in store--",action.payload);
      return{
        ...state,
        activitys:action.payload.activitys
      }
      case STORE_SIGNUP_DATA:
      console.log("reducer signup data---",action.payload);
return {
  ...state,
  firstName:action.payload.firstName
}
    default:
    return state;
  }
}

export default reducer;
