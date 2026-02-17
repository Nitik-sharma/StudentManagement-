import React from 'react'

function StudentDeshboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-600">
          EduPredict
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button className="w-full text-left px-4 py-2 rounded-lg bg-blue-800">
            Dashboard
          </button>

          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-800">
            Attendance
          </button>

          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-800">
            Assignments
          </button>

          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-800">
            Mock Tests
          </button>

          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-800">
            Profile
          </button>
        </nav>

        <div className="p-4 border-t border-blue-600">Logout</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Top Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Student Dashboard</h1>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full">
              S
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Welcome Card */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow mb-6">
            <h2 className="text-2xl font-bold mb-2">
              Welcome Back, Student 👋
            </h2>

            <p>Track your academic progress and placement prediction.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500">Attendance</p>
              <h3 className="text-2xl font-bold text-blue-600">85%</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500">Assignment Avg</p>
              <h3 className="text-2xl font-bold text-green-600">78%</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500">Mock Test Avg</p>
              <h3 className="text-2xl font-bold text-purple-600">82%</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-500">CGPA</p>
              <h3 className="text-2xl font-bold text-orange-600">8.5</h3>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4">Placement Prediction</h3>

              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-green-500 h-4 rounded-full w-[75%]"></div>
              </div>

              <p className="mt-2 font-semibold text-green-600">
                75% Placement Probability
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4">Academic Summary</h3>

              <ul className="space-y-2 text-gray-600">
                <li>Aptitude Score: 82</li>
                <li>Communication: 8/10</li>
                <li>Backlogs: 0</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentDeshboard