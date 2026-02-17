import React from 'react'

function TeacherDeshborad() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-900 to-indigo-700 text-white hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-indigo-600">
          EduPredict
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button className="w-full text-left px-4 py-2 bg-indigo-800 rounded-lg">
            Dashboard
          </button>

          <button className="w-full text-left px-4 py-2 hover:bg-indigo-800 rounded-lg">
            Manage Attendance
          </button>

          <button className="w-full text-left px-4 py-2 hover:bg-indigo-800 rounded-lg">
            Manage Assignments
          </button>

          <button className="w-full text-left px-4 py-2 hover:bg-indigo-800 rounded-lg">
            Manage Mock Tests
          </button>

          <button className="w-full text-left px-4 py-2 hover:bg-indigo-800 rounded-lg">
            Students
          </button>
        </nav>

        <div className="p-4 border-t border-indigo-600">Logout</div>
      </aside>

      {/* Main */}
      <main className="flex-1">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex justify-between">
          <h1 className="text-xl font-semibold">Teacher Dashboard</h1>

          <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
            T
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {/* Welcome */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl mb-6">
            <h2 className="text-2xl font-bold">Welcome, Teacher 👋</h2>
            <p>Manage students, assignments, and performance.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <p>Total Students</p>
              <h3 className="text-2xl font-bold text-indigo-600">120</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p>Assignments</p>
              <h3 className="text-2xl font-bold text-green-600">45</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p>Mock Tests</p>
              <h3 className="text-2xl font-bold text-purple-600">18</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p>Courses</p>
              <h3 className="text-2xl font-bold text-orange-600">6</h3>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-xl shadow mt-6">
            <h3 className="font-semibold mb-4">Recent Activity</h3>

            <ul className="space-y-2 text-gray-600">
              <li>Uploaded Assignment 3</li>
              <li>Marked Attendance</li>
              <li>Added Mock Test Result</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TeacherDeshborad