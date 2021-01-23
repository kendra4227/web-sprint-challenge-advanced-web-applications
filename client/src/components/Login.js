import React from "react";
import axios from "axios";


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  class Login extends React.Component {
    state ={
        credentials:{
            username:"",
            password:""
        }
}
};

handleChange = e =>{
    this.setState({
        credentials:{
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    });
};

login =e => {
    e.preventDefault();
}

axios.post("http://localhost:5000/api/login", this.state.credentials)
.then(res=> { 
    console.log(res)
    localStorage.setItem("token", res.data.payload); 

    this.props.history.push('/colors')
})

.catch(err => console.log(err));



render ();{
return(
  
    <div className = "form">
        <form onSubmit ={this.login}>
            <input 
            type="text" 
            name="username" 
            value={this.state.credentials.username}
            onChange={this.handleChange}/>

<input 
            type="password" 
            name="password" 
            value={this.state.credentials.password}
            onChange={this.handleChange}/>

            <button>Log In</button>
        </form>
    </div>
);
}

export default Login;