import axios from "axios"
import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export const Restpass=()=>{

    const { token } = useParams(); 
    const navigate= useNavigate
  const tokenDot = token.replace(/-/g, '.');
   const [formData,setData]=useState({
    password : ""
  })
  const handelInputChange=(e)=>{
    console.log(e.target.value)
        setData({
            ...formData,
            [e.target.name]: e.target.value
        });
  }

const handelSubmuit= async (e) => {
    e.preventDefault();
    try{
      const response= await axios.post(`http://localhost:8000/api/auth/resetPassword/${tokenDot}`,formData);
      console.log(response.data); 
      navigate("/login");
    }catch(err){
            console.log(err.message);
    }
}
return (
  <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
  <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700">Allo livreur</h1>
      <form className="space-y-4" onSubmit={handelSubmuit} method="POST">
        
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
              <button type="submit" className="btn btn-block">reset password</button>
          </div>
      </form>
  </div>
</div>
)
}