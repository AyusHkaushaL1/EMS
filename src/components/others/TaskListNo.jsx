import React from 'react'

const TaskListNo = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 flex-wrap">
      {['newTask', 'completed', 'active', 'failed'].map((key) => (
        <div
          key={key}
          className="py-6 px-6 rounded-xl w-[45%] max-w-xs bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-md"
        >
          <h2 className="text-3xl font-semibold">{data.taskCount[key]}</h2>
          <h3 className="text-xl font-medium capitalize">
            {key.replace(/([A-Z])/g, ' $1')} Task
          </h3>
        </div>
      ))}
    </div>
  )
}

export default TaskListNo
