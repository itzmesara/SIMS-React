
import './Sample.css'
function Sample()
{
    const container=document.getElementById('container');
    const Toggle=()=>
    {
        container.classList.toggle("active");
    }
    return(
        <div className='main-container'>
            <div className="container" id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <input type="text" placeholder="Name"/>
                        <input type="emai" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button>Sign up</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1> 
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <a href="#">Forget Your Password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-right">
                            <h1>Welcome Back!</h1>
                            <p>Enter Your Password details
                                to use all of the site features
                            </p>
                            <button className="hide" id="login" onClick={Toggle}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-left">
                            <h1>Hello, Friends!</h1>
                            <p>Register with your password details to use all of the site features
                            </p>
                            <button className="hide" id="register" onClick={Toggle}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sample;