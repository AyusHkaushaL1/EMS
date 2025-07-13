import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] h-full p-5 bg-white/20 backdrop-blur-md rounded-xl border border-white/20 text-white shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="bg-blue-500/70 text-xs px-2 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskData}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.description}</p>

      <div className="mt-4">
        <button className="bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm transition">
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask
