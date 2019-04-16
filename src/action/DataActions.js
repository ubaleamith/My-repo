import {STORE_DATA} from './types';
import {STORE_ACTIVITY_DATA} from './types';
import {STORE_SIGNUP_DATA} from './types';


export const storeValue = (data) =>
{
  console.log('inside Actions --',data);
  return {
    type: STORE_DATA,
    payload: data
  };
}

export const storeActivityValue = (data) =>
{
  console.log('inside activity store ',data);
  return  {
    type: STORE_ACTIVITY_DATA,
    payload:data
  };
}


export const storeSignUpData=(data) =>
{
  console.log(" sign up inside the store ",data);
  return
  {
    //  type:STORE_SIGNUP_DATA,
    // payload:data
  };
}
