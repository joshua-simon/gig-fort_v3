import { useState } from 'react'
import '../registerStyle.css'
import icon from '../assets/images/Icon_Gold_48x48.png'


const Register = () => {

    const [ { email,password,passwordVerify,username}, setFormDetails ] = useState({
        email: "",
        password: "",
        passwordVerify:"",
        username: ""
    })
    const [ errors,setErrors ] = useState({})

    const errorMessages = {
        emailNotValid: "Please enter a valid email address",
        emailInUse: "Email address is currently in use by another user",
        passwordLength: "Password needs to be more than 8 characters",
        passwordsDontMatch: "Passwords don't match - please re-enter password",
        username: "Username is currently in use"
    }

    const handleChange = (e) => {
        const { name,value } = e.target
        setFormDetails(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

  return (
    <div className="register-container">
      <img src={icon} />
      <p>Register for Gig Fort</p>
      <form>
        <label>
          Your email 
          <input 
          type="text" 
          name="email" 
          placeholder="Enter email"
          onChange={handleChange} 
          />
        </label>
        <label>
          Password
          <input 
          type="password" 
          name="password" 
          placeholder="Enter password" 
          onChange={handleChange} 
          />
        </label>
        <label>
          Re-enter your password
          <input
            type="password"
            name="passwordVerify"
            placeholder="Re-enter password"
            onChange={handleChange}
          />
        </label>
        <label>
          Username
          <input 
          type="text" 
          name="username" 
          placeholder="Enter username" 
          onChange={handleChange} 
          />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register