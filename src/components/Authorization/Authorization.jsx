import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import './style.css'
export const Authorization = () => {
  const[newUser,setNewUser]=useState(1)

  useEffect(() => {
    var pathname=window.location.pathname;
    pathname=='/login' ?  setNewUser(0) : setNewUser(1)
    console.log('working')
  },)
  
  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:""
    }
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("url", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({name:formik.values.name,email: formik.values.email, password: formik.values.password})
    // });
    // const json = await response.json()
    // console.log(json);
    // if (json.success){
    //     // Save the auth token and redirect
    //     localStorage.setItem('token', json.authtoken); 
    //     navigate('/')

    // }
    // else{
    //     alert("user already exists");
    // }
    console.log(formik.values.name)
    console.log(formik.values.email)
    console.log(formik.values.password)
}
  return (
    <div className="signupBox">
      {
       newUser? <span className='signIn'>Sign In</span>
        : <span className='signIn'>Login</span>
      }
    <form  className='form'>
      { newUser? 
         <input
        id='name'
        name='name'
        placeholder="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
        type='text'
        onClick={()=>console.log(inputElements)}
         >
        </input> : ''
      }
        <input
        id='email'
        name='email'
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
        type='text'

         >
        </input>
        <input
        id='password'
        name='password'
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
        type='text'

         >
        </input>
    </form>
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
