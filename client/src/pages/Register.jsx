// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from "axios"

// const Register = () => {
//   const [inputs, setInputs]= useState({
//     username:"",
//     email:"",
//     password:"",
//   })

//   const [err,setError]=useState(null)

//   const navigate = useNavigate()
//   const handleChange = e =>{
//     setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
//   }

//   const handleSubmit = async e =>{
//     e.preventDefault()
//     try{
//       const res =await axios.post("/auth/register", inputs)
//       console.log(res);
//       navigate("/login");
//     }catch(err){
//       setError(err.response.data)
//     }

//   }
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  // console.log(inputs)
  return (
    <div className='auth'>
      <h1 className='h1'>Register</h1>
      <form className='form'>
        <input required className='input' type='text' placeholder='username' name='username' onChange={handleChange}/>
        <input required className='input' type='email' placeholder='email' name='email' onChange={handleChange}/>
        <input required className='input' type='password' placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit} className='button'>Register</button>
        {err && <p className='p'>{err}</p>}
        <span className='span'>You have an account? <Link to="/login">Login</Link></span>
      </form>
      
    </div>
  )
}

export default Register
