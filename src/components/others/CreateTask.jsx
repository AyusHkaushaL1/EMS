import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
      alert('Please fill all fields');
      return;
    }

    // Create new task
    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      description: taskDescription,
      taskData: taskDate,
      category,
    };

    // Find the employee
    const updatedEmployees = userData.map((employee) => {
      if (
        employee.firstName.toLowerCase().trim() === asignTo.toLowerCase().trim()
      ) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskCount: {
            ...employee.taskCount,
            newTask: employee.taskCount.newTask + 1,
          },
        };
      }
      return employee;
    });

    // If employee was not found
    const matched = updatedEmployees.some(
      (emp) =>
        emp.firstName.toLowerCase().trim() === asignTo.toLowerCase().trim()
    );

    if (!matched) {
      alert('Employee not found');
      return;
    }

    // Update state and localStorage
    setUserData(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Reset form
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAsignTo('');
    setCategory('');

    alert('Task created successfully');
  };

  return (
    <div className="p-8 mt-10 bg-white/50 backdrop-blur-lg border border-white/30 shadow-xl rounded-3xl max-w-6xl mx-auto text-gray-800">
      <form
        onSubmit={submitHandler}
        className="flex flex-col md:flex-row gap-8 justify-between w-full"
      >
        <div className="md:w-1/2 w-full space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="e.g., Build dashboard UI"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Assign To</label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              type="text"
              placeholder="e.g., Ayush"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="e.g., Design, Development"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="md:w-1/2 w-full flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Detailed task description..."
            className="w-full h-40 px-4 py-2 rounded-xl border border-gray-300 bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>

          <button
            type="submit"
            className="mt-5 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition duration-300"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
