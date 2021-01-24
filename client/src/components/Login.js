import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
    
   const initialState ={
            username:"",
            password:""
        }

  
const Login =(props)=> {
  const history = useHistory()
  const [credentials, setCredentials] = useState(initialState);

const handleChange = (e) =>{
  setCredentials({
    ...credentials,
    [e.target.name] : e.target.value
  });
}

const handleSubmit = (e) =>{
  e.preventDefault()
  axiosWithAuth()
  .post('/api/login', credentials)
  .then(res => {
    localStorage.setItem('token', res.data.payload);
    history.push('/api/colors')
  })
  .catch(err => {
    console.log('POST ERROR: ' + err)
  })
  setCredentials(credentials)
}


return(
  <>
  <h1>Welcome to the Bubble App!</h1>
    <div className = "form">
        <form onSubmit ={handleSubmit}>
          <label htmlFor="username">Username:</label>
            <input 
            type="text" 
            name="username" 
            value={credentials.username}
            onChange={handleChange}/>
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            name="password" 
            value={credentials.password}
            onChange={handleChange}/>

            <button>Log In</button>
        </form>
    </div>
    </>
);
}
  
  
export default Login;