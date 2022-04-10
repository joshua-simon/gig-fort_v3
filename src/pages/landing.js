import gf_logo from '../assets/images/gf_logo_gold_text_150x150.png'
import { Link } from 'react-router-dom'

const Landing = () => {
    return(
        <div className='landing-container'>
           <img src = {gf_logo}/>
           <div className='landing-buttons'>
               <Link to = '/login'>
            <button>Login</button>
                </Link>
            <p>|</p>
                <Link to = '/register'>
            <button>Register</button>
                </Link>
           </div>
        </div>
    )
}

export default Landing