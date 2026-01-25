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
  
  </div>
  )
}

export default page
