import axios from 'axios';
import React,{useEffect, useState} from 'react'
import './forgot.css'

export default function Forgot() {
    const [user,setUser] = useState([]);
    const [email,setEmail]=useState();
    const [status,setStatus]=useState(false);
    const [id,setId]=useState();
    const [password,setPassword]=useState();
    const [name,setName]=useState();
    const [success,setSuccess]=useState(true);
    const [uFind,setUFind]=useState("");
    useEffect(()=>{
        axios.get("http://localhost:3000/User")
        .then(res=>{setUser(res.data);
    })
        .catch(err=>console.log(err))
    },[])
    const Find=()=>{
        const userExists=user.find(obj=>obj.email===email);
        const index=user.findIndex(obj=>obj.email===email);
        if(userExists)
        {
           setStatus(true);
           setId(user[index].id);
           setName(user[index].email);
           setEmail("")
        }
        else
        {
            setUFind("User does not exist");
            setTimeout(()=>{setUFind("")},2000)
        }
    }
    const UpdatePassword=()=>{
       if(password.length>5&&password===document.getElementById("conPass").value)
       {
        axios.put(`http://localhost:3000/User/${id}`,
            {
                id:id,
                email:name,
                password:password
            }
        )
        .then(()=>{
            setSuccess(false);
            setTimeout(()=>{ window.location.href="/"},3000);
        })
        .catch(err=>console.log(err))
    }
    }
  return (
      <div className='forgot-body'>
        <div className='forgot-container'>
            {
             status?<div className='forgot-data'>
                {success?
                <div className='forgot-new'>
                <h3>Create New Password</h3>
                <input type='password' placeholder='New Password' value={password} onChange={(e)=>setPassword(e.target.value)}  minLength={6} required/>
                <input type='text' placeholder='Confirm Password' id="conPass"minLength={6} required/>
                <button type='submit' onClick={UpdatePassword}>Update</button>
                </div>:
                <div>
                    <h3>Password Updated!</h3>
                    </div>
}
                </div>:   
                <div className='forgot-data'>
                    <h3>Find Your Account</h3>
                <input type='email' placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)}required/>
                <p>{uFind}</p>
            <button type='button' onClick={Find}>Find Me</button>
            </div>
}
        </div>
      </div>
  )
}
