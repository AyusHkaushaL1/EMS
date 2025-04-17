import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   
  const submitHandler = (e) =>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 rounded-2xl p-20'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }} required 
          className='placeholder:text-gray-400 outline-none border-2 border-emerald-600 rounded-full py-4 px-5 text-xl text-white' type="email" placeholder='Enter your email' />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }} required 
          className='mt-3 placeholder:text-gray-400 outline-none border-2 border-emerald-600 rounded-full py-4 px-5 text-xl text-white' type="password" placeholder='Enter your password' />
          <button className='placeholder:text-white outline-none mt-4 border-2 bg-emerald-600 rounded-full py-4 px-5 text-xl text-white' >Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login