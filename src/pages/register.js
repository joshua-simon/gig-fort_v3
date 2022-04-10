import '../registerStyle.css'
import icon from '../assets/images/Icon_Gold_48x48.png'

const Register = () => {
  return (
    <div className="register-container">
      <img src={icon} />
      <p>Register for Gig Fort</p>
      <form>
        <label>
          {" "}
          Your email 
          <input type="text" name="email" placeholder="Enter email" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Enter password" />
        </label>
        <label>
          Re-enter your password
          <input
            type="password"
            name="password-verify"
            placeholder="Re-enter password"
          />
        </label>
        <label>
          Username
          <input type="text" name="username" placeholder="Enter username" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register