import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
   const [userData, setUserData]= useContext(AuthContext)
    return (
        <div className=' bg-[#1c1c1c] p-5 rounded mt-5 '>
           
           <div className='bg-red-500 py-2 flex rounded justify-between px-4 mb-2'>
               <h3 className='w-1/5 text-lg font-medium'>Employee Name</h3>
               <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
               <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
               <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
               <h5 className='w-1/5 text-lg font-medium'>Failed</h5>
           </div>
           <div className='overflow-auto'>
           {userData.map(function(elem , idx){
               return  <div  key={idx} className='border-2 border-emerald-500 py-2 flex rounded justify-between px-4 mb-2'>
               <h2 className='w-1/5 text-lg font-bold'>{elem.firstName}</h2>
               <h3 className='w-1/5 text-lg font-medium'>{elem.taskCount.newTask}</h3>
               <h5 className='w-1/5 text-lg font-medium'>{elem.taskCount.active}</h5>
               <h5 className='w-1/5 text-lg font-medium'>{elem.taskCount.completed}</h5>
               <h5 className='w-1/5 text-lg font-medium'>{elem.taskCount.failed}</h5>
           </div>
            })}
           </div>
         
           
        </div>
    )
}

export default AllTask