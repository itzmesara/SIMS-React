// src/components/StudentList.js
import React, { useState } from 'react';
import './addStd.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const StudentList = () => {
  const [name,setName]=useState("");
  const [reg,setReg]=useState("");
  const [course,setCourse]=useState("")
  const [success,setSuccess]=useState("");
  const handleAddStudent = () => {
    axios.post("http://localhost:3000/Student",{
      Student_name:name.toUpperCase(),
      Student_reg:reg.toUpperCase(),
      Student_Course:course.toUpperCase()
    })
    .then(()=>{
      console.log("Add Student success")
      setSuccess("Student Added Successfully");
  })
    .catch(err=>console.log(err))
    setTimeout(()=>{
      setName("");
      setReg("");
      setCourse("");
      setSuccess("");
    },3000)
  };

  return (
    <div className='addStd-container'>
      <h1 className='add-h1'>Student List</h1>
      <div className='input'>
      <input
        type="text"
        placeholder="Enter student name"
       className='add-input'
       value={name}
       onChange={(e)=>setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Register Number"
        value={reg}
        className='add-input'
       onChange={(e)=>setReg(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Course "
        value={course}
        className='add-input' 
        onChange={(e)=>setCourse(e.target.value)}
      />
      </div>
      <button className='add-button' onClick={handleAddStudent}>Add Student</button>
      <div className='success-add'>
      {
        success && <h3 className='success'>{success}</h3>
      }
      </div>
      <a href="/home" id="a1"><h3 className='h3-l'>Back</h3></a>
    </div>
  );
};

export default StudentList;
