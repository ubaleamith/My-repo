import axois from 'axios';

export function login(data)
{
  return dispatch=>
  {
    return axois.post('/api/auth',data);
  }

}
