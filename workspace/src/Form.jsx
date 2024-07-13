import { useState } from "react"

export default function form(){
   let [formData , setFormData] = useState({
    fullName:"",
    username:"",
    password:"",
   });

  //  let handleNameChange = (event) =>{
  //     setFullName(event.target.value);
  //};

  //  let handleUsername = (event) =>{
  //      setUsername(event.target.value);
  //  };

  let handleInputChange = (event) =>{
    setFormData( (currData) => {
       return {...currData, [event.target.name]: event.target.value}; 
    });
  };

  let handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData);
    setFormData({
        fullName:"",
        username:"",
        password:"",
    });
  };

    return(
        <form onSubmit = {handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="Enter full Name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/>
            <br></br>
            <br></br>
            <label htmlFor="username">User Name</label>
            <input placeholder="Enter username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
            <br></br>
            <br></br>
            <label htmlFor="password">Password</label>
            <input placeholder="Enter password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"/>
            <button>Submit</button>
        </form>
    )
}
