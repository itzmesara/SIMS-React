import axios from "axios";
import { useState,useEffect } from "react";
import './Editstd.css';
function Edit()
{
    const [id,setId]=useState([]);
    const [name,setName]=useState([]);
    const [reg,setReg]=useState([]);
    const [course,setCourse]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/Student")
        .then((res)=>{
            const data=res.data;
            setId(data.map(index=> index.id));
            setName(data.map(index => index.Student_name))
            setReg(data.map(index => index.Student_reg));
            setCourse(data.map(index => index.Student_Course));
        }
        )
     },[])
    
    return(
        <div className="list-con">
            <h3>Student List</h3>
            <div className="student-list">
                <div className="h-list">
                <h1>Name</h1>
                <h1>Reg No</h1>
                <h1>Course</h1>
                <h1></h1>
                </div>
                    
                {name &&
                    name.map((item, index) => (
                        
                        <div key={index} className="h-list">
                            <h4>{item}</h4>
                            <h4>{reg[index]}</h4>
                            <h4>{course[index]}</h4>
                            <button type="button" onClick={()=>{
                                axios.delete(`http://localhost:3000/Student/${id[index]}`);
                                setName(name.filter((_, i) => i!== index));
                                setReg(reg.filter((_, i) => i!== index));
                                setCourse(course.filter((_, i) => i!== index));
                            }}>Delete</button>
                        </div>
                    ))
                }
            </div>
            <a href='/home' className='a3'><h3 id="h3-l">Back</h3></a>
        </div>
    )
}
export default Edit;