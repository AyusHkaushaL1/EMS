import React from 'react'
import Header from '../others/Header'
import TaskListNo from '../others/TaskListNo'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full p-10 bg-gradient-to-br from-blue-300 to-blue-600 text-white">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNo data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
