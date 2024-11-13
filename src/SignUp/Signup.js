import { Link } from 'react-router-dom';
import './Signup.css'
import axios from 'axios';



function SignUp()
{

    
    const Check1=()=>{
        const user=document.getElementById("user").value;
        const pass=document.getElementById("pass").value;
        if(user&&pass.length>5)
        {
            
            axios.get("http://localhost:3000/User")
            .then((res)=>
                {
                       const data=res.data;
                       console.log(data);
                       if(data.find(obj => obj.email === user))
                       {
                          let index=data.findIndex(obj => obj.email === user);
                          
                          if(data[index].password === pass)
                          {
                           
                            window.location.href='/home';
                          }
                          else{
                            alert("Invalid password");
                          }
                       }
                       else
                       {
                        alert("User not found");
                       }
                    
                })
                .catch((error)=>
                {
                    console.log(error);
                })
            
        }
        else{
            if(!user)
            {
                alert("Enter UserName");
            }
            else{
                alert("Password must be at least 6 characters")
            }
        }
    }
    return(
        <div className='main-container'>
            <div className="container" id="container">
                <div className="form-container sign-in">
                    <form>
                        <h1>Login</h1> 
                        <input type="text" id="user" placeholder="UserName" required/>
                        <input type="password" id="pass"placeholder="Password" minLength={6} required/>
                        <a href="/forgotPassword">Forget Your Password?</a>
                        <button type='submit' onClick={Check1}>Login</button>
                    </form>
                </div>
               <p id='loading-msg'></p>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-right">
                            <h1>Welcome Back!</h1>
                            <p>Enter Your Password details
                                to use all of the site features
                            </p>
                           <Link to="/signup"><button className="hide" id="login" >Register</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignUp;