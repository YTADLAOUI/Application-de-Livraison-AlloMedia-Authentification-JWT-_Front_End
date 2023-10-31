import React, { useState } from "react"
import { toast } from 'react-toastify';

import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export const Register= ()=>{

//   const [formData , setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phoneNumber:0, 
//     address:"",
//     image:"",
//     role:""
// });
  const navigate = useNavigate();
const { register, handleSubmit, formState: { errors } } = useForm();
// const handleInputChange = (e) => {
//   // console.log(e.target.value)
//   setData({
//       ...formData,
//       [e.target.name]: e.target.value
//   });
// };
const handlSubmit = async (data) => {
        // e.preventDefault();
  try {
       console.log(data);
      // Faites la requête POST vers votre API d'enregistrement
      // console.log(data?.image.File.name,"HH_")
      const response = await axios.post("http://localhost:8000/api/auth/register", data);
      
      // console.log(response.data?.image);
          if(response.data.remplie) toast.warning(response.data.remplie, { position: toast.POSITION.TOP_RIGHT});
          if(response.data.utilisateurExiste) toast.warning(response.data.utilisateurExiste, { position: toast.POSITION.TOP_RIGHT});
          if(response.data.check) toast.success(response.data.check, { position: toast.POSITION.TOP_RIGHT});

  } catch (error) {
      console.log(error.message);
      console.log(error);
      toast.error('try agine your registration !', {
        position: toast.POSITION.TOP_RIGHT
    });
  }
};

  return (
    <div className="relative flex flex-col justify-center h-screen  overflow-hidden p-6 bg-slate-100	">
    <div className=" max-w-sm w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Allo merhaba</h1>
       
          <form className="space-y-4" onSubmit={handleSubmit(handlSubmit)} encType="multipart/form-data">
              <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("name", {required: "name is required" })}  />
                  <span className="text-red-500 text-sm">{errors.name?.message}</span>
                  <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> name</label>
              </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "{...register("email", {required: "Email is required" })}  />
                <span className="text-red-500 text-sm">{errors.email?.message}</span>
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  
                {...register("password",{ required: "Le mot de passe est requis",
              minLength: { value: 6, message: "Le mot de passe doit contenir au moins 6 caractères" }
            })}  />
            <span className="text-red-500 text-sm"> {errors.password && <p>{errors.password.message}</p>}</span>
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-2 group">
                  <input type="tel" name="phoneNumber" id="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register("phoneNumber",{
                  required: "Le numéro de téléphone est requis",
                  pattern: {
                  value: /^\d{10}$/,
                  message: "Le numéro de téléphone doit contenir exactement 10 chiffres",
                  },
                })} />
                <span className="text-red-500 text-sm"> {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}</span>
                  <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (0602447890)</label>
              </div>
              <div className="relative z-0 w-full mb-2 group">
                  <input type="text" name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("address", {required: "address is required" })}/>
                  <span className="text-red-500 text-sm">{errors.address?.message}</span>
                  <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
              </div>
              <div className=" flex flex-col text-gray-400  ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="countries" >Select an option</label>
                    <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("role", { required: "Role is required" })}
                name="role"
                // value={formData.role}
                >
            
                <option value="">Choisissez votre rôle</option>
                <option value="Livreur">Livreur</option>
                <option value="client">Client</option>

                    </select>
                </div>
                    <span className="text-red-500 text-sm">{errors.role?.message}</span>
            </div>
            {/* <div className="relative z-0 w-full mb-6 group">
                <input type="file" name="image" id="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("image", {required: "image is required" })}/>
                <span className="text-red-500 text-sm">{errors.image?.message}</span>
                <label htmlFor="image" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
            </div> */}
            <hr></hr>
            <a onClick={()=>{navigate("/login")}} className="text-xs text-gray-600 hover:underline hover:text-blue-600">Go to login</a>
            <div>
              <button type="submit" className="btn btn-block">Register</button>
            </div>
          </form>
        </div>
      </div>
  )
}