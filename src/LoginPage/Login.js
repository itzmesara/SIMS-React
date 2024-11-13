import { Link} from 'react-router-dom';
import './Login.css'
import axios from 'axios';
import React from 'react';

function Login()
{
    
    const Check=()=>{
        
        const user=document.getElementById("user").value;
        const pass=document.getElementById("pass").value;
        const con=document.getElementById("con").value;
        axios.get('http://localhost:3000/User')
       .then((res)=>
        {
            const data=res.data;
            const userData=data.find(obj => obj.email === user)
            if(!userData&&pass.length>5)
            {
                
                if(pass===con)
                {
                    axios.post('http://localhost:3000/User',{
                        email:user,
                        password:pass
                    })
                    .then(()=>{
                      window.location.href='/';
                    })
                    .catch(err=> console.log(err))
               }
               else{
                alert("Password Mismatch");
               }
            }
            else
            {
                if(pass!==con)
                {
                    alert("Password Mismatch");
                }
                else if(!user)
                {
                    alert("Enter User Name");
                }
                else if(pass.length<6)
                {    
                    alert("Password must be at least 6");
                }
            }
        })
       .catch((err)=>console.log(err))
    }   
    return(
        <div className='login-body'>
        <div className='main-container'>
            <div className="container active" id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <input type="email" id="user" placeholder="Name" required/>
                        <input type="password" id="pass"placeholder="Set Password" minLength={6} required/>
                        <input type="text" id="con" placeholder="Confirm Password" minLength={6} required/>
                        <button type='submit' onClick={Check}>Sign up</button> 
                    </form>
                </div>
                
               <p id='loading-msg'></p>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Hello, Friends!</h1>
                            <p>Register with your password details to use all of the site features
                            </p>
                            <Link to="/"><button className="hide" id="register" >Login</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Login;