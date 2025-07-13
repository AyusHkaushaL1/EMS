import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  const logOut=()=>{
    localStorage.setItem('loggedInUser' , '')

    props.changeUser('')
  }

  return (
    <div className="flex items-end justify-between p-4 rounded-xl bg-white/30 backdrop-blur-md border border-white/20 text-white shadow-md">
  <h1 className="font-medium text-2xl">
    Hello <br />
    <span className="text-3xl font-semibold">{props.data?.firstName || 'Ayush'}</span>
  </h1>
  <button onClick={logOut} className="bg-blue-600 hover:bg-blue-900 text-blue-300 px-4 py-2 rounded-xl transition">
    Log Out
  </button>
</div>

  )
}

export default Header