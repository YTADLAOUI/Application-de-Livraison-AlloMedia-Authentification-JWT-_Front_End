import axios from "axios"
import Cookies from "js-cookie"
import React, { useEffect, useState } from "react"
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import {toast } from 'react-toastify';
export const Login=()=>{
    const data= useSelector((state) => state.res.res) ;
    // console.log(data.payload.success,"hello");
    useEffect(
        ()=>{
            if(data.payload?.success) toast.success(data.payload.success, { position: toast.POSITION.TOP_RIGHT});
            if(data.payload?.error) toast.error(data.payload.error, { position: toast.POSITION.TOP_RIGHT});
        },[data]
    )
    
    const navigate=useNavigate();
   const [formData,setData]=useState({
    email : "",
    password : ""
  })

  const handelInputChange=(e)=>{
    // console.log(e.target.value)
        setData({
            ...formData,
            [e.target.name]: e.target.value
        });
  }

const handelSubmuit= async (e) => {
    e.preventDefault();
    try{
      const response= await axios.post("http://localhost:8000/api/auth/login",formData);
    //   console.log(JSON.stringify(response.data.user))
        Cookies.set('user',JSON.stringify(response.data.user));
        Cookies.set('token',response.data.loginToken);
        navigate("/dashboard");
    }catch(err){
            console.log(err.message);
    }
}
return (
  <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden p-6">
  <div className=" max-w-sm w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700">Allo marhaba</h1>
      <form className="space-y-4" onSubmit={handelSubmuit} method="POST">
          <div>
              <label className="label" >
                  <span className="text-base label-text">Email</span>
              </label>
              <input name="email" type="text" placeholder="Email Address" className="w-full input input-bordered" onChange={handelInputChange} />
          </div>
          <div>
              <label className="label">
                  <span className="text-base label-text">Password</span>
              </label>
              <input name="password"  type="password" placeholder="Enter Password"
                  className="w-full input input-bordered" onChange={handelInputChange}/>
          </div>
          <div className="flex justify-between">
          <a href="/forgetPassword" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
          <div>
          </div>
          <a href="/register" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Créer nouveau compte</a>
          </div>       
          <div>
              <button type="submit" className="btn btn-block">Login</button>
          </div>
      </form>
  </div>
  
</div>
)
}