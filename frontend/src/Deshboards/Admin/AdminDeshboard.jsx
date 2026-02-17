import React, { useState } from "react";

function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 font-bold text-lg border-b">Menu</div>

        <ul className="p-4 space-y-2">
          <li>
            <button
              onClick={() => setActivePage("dashboard")}
              className={`w-full text-left p-2 rounded ${
                activePage === "dashboard"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              Dashboard
            </button>
          </li>

          <li>
            <button
              onClick={() => setActivePage("students")}
              className="w-full text-left p-2 rounded hover:bg-gray-200"
            >
              Students
            </button>
          </li>

          <li>
            <button
              onClick={() => setActivePage("courses")}
              className="w-full text-left p-2 rounded hover:bg-gray-200"
            >
              Courses
            </button>
          </li>

          <li>
            <button
              onClick={() => setActivePage("attendance")}
              className="w-full text-left p-2 rounded hover:bg-gray-200"
            >
              Attendance
            </button>
          </li>

          <li>
            <button
              onClick={() => setActivePage("marks")}
              className="w-full text-left p-2 rounded hover:bg-gray-200"
            >
              Marks
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <div className="bg-white p-4 shadow flex justify-between">
          <h1 className="font-bold">Student Management System</h1>

          <div>
            Admin
            <button className="ml-4 bg-red-400 text-white px-3 py-1 rounded">
              Logout
            </button>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="p-6">
          {activePage === "dashboard" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 shadow rounded">
                  Total Students: 5
                </div>

                <div className="bg-white p-4 shadow rounded">
                  Total Courses: 4
                </div>
              </div>
            </div>
          )}

          {activePage === "students" && (
            <div>
              <h2 className="text-2xl font-bold">Students Page</h2>
            </div>
          )}

          {activePage === "courses" && (
            <div>
              <h2 className="text-2xl font-bold">Courses Page</h2>
            </div>
          )}

          {activePage === "attendance" && (
            <div>
              <h2 className="text-2xl font-bold">Attendance Page</h2>
            </div>
          )}

          {activePage === "marks" && (
            <div>
              <h2 className="text-2xl font-bold">Marks Page</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
