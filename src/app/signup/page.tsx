"use client"

import axios from 'axios';
import React, { useState } from 'react'

interface SignUp{
    cname:string,
    email:string,
    pass_word:string
}

const page = () => {
    const [signup, setSignup] = useState<SignUp>({ cname: '', email: '', pass_word: '' });
    
    const handlerChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setSignup({
            ...signup,
            [name]:value
        })
    }

    const handleSubmit=async()=>{
        try{
            const response=await axios.post('http://localhost:8080/signup',signup);
            console.log(response);
            if(response.status===200){
                console.log('User registered successfully');
            }
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
    <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
      
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Welcome Back
      </h2>
      <p className="text-center text-gray-500 text-sm mt-1">
        Please login to your account
      </p>

      <form className="mt-6 space-y-5">
      <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="name"
            onChange={handlerChange}
            name='cname'
            placeholder="Enter your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            onChange={handlerChange}
            name='email'
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            onChange={handlerChange}
            name='pass_word'
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
          />
        </div>
        <button
          type="button"
          onClick={()=>handleSubmit()}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          SignUp
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-6">
        Don’t have an account?
        <span className="ml-1 text-indigo-600 font-medium cursor-pointer hover:underline">
          Register
        </span>
      </p>

    </div>
  </div>
  )
}

export default page
