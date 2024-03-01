'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchBox() {
    const router=useRouter();

    const[text,setText]=useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
        if(!text.trim()) return;
        router.push(`/${text}`)

    }

  return (
    <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="pb-5">Enter Roll Number: </div>
            <div className="">
                <input type='text'
                onChange={(e)=>setText(e.target.value)}
                placeholder='Enter roll number' 
                autoComplete='on'
                className='border-2  flex mx-auto mt-1 '/><br />
            </div>
           
        </div>
        
        <button 
        onClick={submitHandler} 
        className='mx-auto w-fit flex bg-gray-800 text-white px-6 py-1 rounded-full '
        >Submit</button>
    </form>
  )
}
