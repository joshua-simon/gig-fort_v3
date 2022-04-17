import { useState } from 'react'
import { firebase } from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
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
        email: {
            emailNotValid: "Please enter a valid email address",
            emailInUse: "Email address is currently in use by another user"
        },
        password: {
            passwordLength: "Password needs to be more than 8 characters",
            passwordsDontMatch: "Passwords don't match - please re-enter password"
        },
        username: "Username is currently in use"
    }

    const handleChange = (e) => {
        const { name,value } = e.target
        setFormDetails(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    const validateEmailAndPassword = (email,password,passwordVerify) => {
      const emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const errorsObj = {}
      if(!email.match(emailRegEx)) errorsObj.email = errorMessages.email.emailNotValid
      if(!password.length > 8) errorsObj.password = errorMessages.password.passwordLength
      if(!password === passwordVerify) errorsObj.passwordVerify = errorMessages.password.passwordsDontMatch
      setErrors(errorsObj)
    }

    const handleSubmit = async (e) => {
      console.log('it got here')
      e.preventDefault();
      // validateEmailAndPassword();
      // if (!errors) {
        const auth = getAuth()
        const createdUserResult = createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await firebase
          .firestore()
          .collection("users-general")
          .add({
            dateCreated: Date.now(),
            emailAddress: email,
            username: username,
            userId: (await createdUserResult).user.uid,
          });
      // }
    };

  return (
    <div className="register-container">
      <img src={icon} />
      <p>Register for Gig Fort</p>
      <form onSubmit = {handleSubmit}>
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