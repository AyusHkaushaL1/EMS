import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 to-blue-300 p-8 overflow-auto">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-xl p-6 md:p-10">
        <Header changeUser={props.changeUser} />
        <div className="mt-8">
          <CreateTask />
        </div>
        <div className="mt-8">
          <AllTask />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
