import React, {useState} from "react";
import axios from "axios";
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
    
   const state ={
        credentials:{
            username:"",
            password:""
        }
}
  //POST REQUEST 
axios.post("http://localhost:5000/api/login", this.state.credentials)
.then(res=> { 
    console.log(res)
    localStorage.setItem("token", res.data.payload); 

    this.props.history.push('/colors')
})
.catch(err =>{
  console.log(err);

}) 
const Login =()=> {
  const [user, setUser] = useState(state);

const handleChange = (e) =>{
  e.persist();
  let value = e.target.value;
    this.setState({
        credentials:{
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    });

setUser({
  ...user,
  [e.target.name]:value
});
}

const handleSubmit = (e) =>{
  e.preventDefault();
}

return(
  
    <div className = "form">
        <form onSubmit ={handleSubmit}>
            <input 
            type="text" 
            name="username" 
            value={this.state.credentials.username}
            onChange={handleChange}/>

<input 
            type="password" 
            name="password" 
            value={this.state.credentials.password}
            onChange={handleChange}/>

            <button>Log In</button>
        </form>
    </div>
);

  }
  
export default Login;