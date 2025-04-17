import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

//const [username, setUsername] = useState('')
  //if(!data){
    //setUsername('Admin')
 // }else{
   // sessionStorage(data.firstName)
  //}

  const logOut=()=>{
    localStorage.setItem('loggedInUser' , '')
    //window.location.reload()
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className=' font-medium text-2xl'>Hello <br /><span className='text-3xl font-semibold'>username</span></h1>
        <button onClick={logOut} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-xl'>Log Out</button>
    </div>
  )
}

export default Header