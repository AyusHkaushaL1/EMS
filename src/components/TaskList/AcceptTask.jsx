import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br from-blue-200 to-blue-500 rounded-xl'>
              <div className='flex justify-between items-center'>
                <h3 className='bg-gradient-to-br from-blue-200 to-blue-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskData}</h4>
              </div>
              <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
              <p className='text-sm mt-2'>
                {data.description}
              </p>
              <div className='flex justify-between mt-4'>
                 <button className='bg-blue-500 py-1 px-2 text-sm'>Mark as Completed</button>
                 <button className='bg-gray-900 py-1 px-2 text-sm'>Mark as Failed</button>

              </div>
   </div>
  )
}

export default AcceptTask