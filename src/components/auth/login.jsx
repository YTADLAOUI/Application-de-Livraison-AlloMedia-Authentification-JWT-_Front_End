import axios from "axios"
import Cookies from "js-cookie"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
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
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate=useNavigate();
//    const [formData,setData]=useState({
//     email : "",
//     password : ""
//   })

//   const handelInputChange=(e)=>{
//     // console.log(e.target.value)
//         setData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//   }

const handelSubmuit= async (data) => {
    // e.preventDefault();
    try{
      const response= await axios.post("http://localhost:8000/api/auth/login",data);
    //   console.log(JSON.stringify(response.data.user))
    Cookies.set('user',JSON.stringify(await response.data.user));
    Cookies.set('token',await response.data.loginToken);
    navigate("/dashboard");
    }catch(err){
            console.log(err.message);
    }
}
return (
  <div className="relative flex flex-col items-center justify-center bg-slate-100 h-screen overflow-hidden p-6">
  <div className=" max-w-sm w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700">Allo marhaba</h1>
      <form className="space-y-4" onSubmit={handleSubmit(handelSubmuit)} method="POST">
          <div>
              <label className="label" >
                  <span className="text-base label-text">Email</span>
              </label>
              <input name="email"  {...register("email", { required: "Email is required" })} type="text" placeholder="Email Address" className="w-full input input-bordered" />
              <span className="text-red-500 text-sm">{errors.email?.message}</span>
          </div>
          <div>
              <label className="label">
                  <span className="text-base label-text">Password</span>
              </label>
              <input name="password"  type="password" placeholder="Enter Password"
                  className="w-full input input-bordered"{...register("password", { required: "Password is required" })}/>
                   <span className="text-red-500 text-sm">{errors.password?.message}</span>
          </div>
          <div className="flex justify-between">
          <a onClick={()=>{navigate("/forgetPassword")}} className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
          <div>
          </div>
          <a onClick={()=>{navigate("/register")}} className="text-xs text-gray-600 hover:underline hover:text-blue-600">Créer nouveau compte</a>
          </div>       
          <div>
              <button type="submit" className="btn btn-block">Login</button>
          </div>
      </form>
  </div>
  
</div>
)
}