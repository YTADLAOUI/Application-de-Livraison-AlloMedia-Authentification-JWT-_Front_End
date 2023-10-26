import axios from "axios"
import React, { useState } from "react"

export const ForgetPass=()=>{
   const [formData,setData]=useState({
    email : "",
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
      const response= await axios.post("http://localhost:8000/api/auth/forgetPassword",formData);
      console.log(response.data); 
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
              <label className="label" >
                  <span className="text-base label-text">Email</span>
              </label>
              <input name="email" type="text" placeholder="Email Address" className="w-full input input-bordered" onChange={handelInputChange} />
          </div>
          <div>
          <a href="/register" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Créer nouveau compte</a>
          </div>       
          <div>
              <button type="submit" className="btn btn-block">submit</button>
          </div>
      </form>
  </div>
</div>
)
}