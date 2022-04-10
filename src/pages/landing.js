import gf_logo from '../assets/images/gf_logo_gold_text_150x150.png'

const Landing = () => {
    return(
        <div className='landing-container'>
           <img src = {gf_logo}/>
           <div className='landing-buttons'>
            <button>Login</button>
            <p>|</p>
            <button>Register</button>
           </div>
        </div>
    )
}

export default Landing