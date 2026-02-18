import React from "react";
import AdminNavbar from "./AdminNavbar";

// 1. Move helper components outside or keep them at the bottom
const StatSmallCard = ({ label, value, color }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm">
    <div
      className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white font-bold text-xl`}
    >
      {label === "Present" ? "✓" : label === "Absent" ? "✕" : "👥"}
    </div>
    <div>
      <p className="text-xs text-gray-500 font-bold">{label}</p>
      <p className="text-xl font-black">{value}</p>
    </div>
  </div>
);

function Attendance() {
  // 2. Data goes inside the function but before the return
  const students = [
    {
      name: "Rahul Sharma",
      dept: "Computer Science",
      initial: "R",
      status: "Absent",
    },
    {
      name: "Priya Patel",
      dept: "Information Technology",
      initial: "P",
      status: "Absent",
    },
    {
      name: "Arjun Singh",
      dept: "Electronics",
      initial: "A",
      status: "Present",
    },
    {
      name: "Sneha Gupta",
      dept: "Mechanical Engineering",
      initial: "S",
      status: "Present",
    },
    {
      name: "Vikram Kumar",
      dept: "Computer Science",
      initial: "V",
      status: "Present",
    },
  ];

  return (
    <AdminNavbar>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-1">Attendance</h1>
        <p className="text-gray-500 font-medium mb-8">
          Mark student attendance by course
        </p>

        {/* Filter Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-wrap gap-6 items-end mb-8">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-lg font-bold mb-2">Select Date</label>
            <input
              type="date"
              defaultValue="2025-09-24"
              className="w-full border p-2 rounded-lg focus:outline-blue-400"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-lg font-bold mb-2">
              Select Course
            </label>
            <select className="w-full border p-2 rounded-lg bg-white focus:outline-blue-400">
              <option>All Courses</option>
            </select>
          </div>
          <button className="bg-[#4F46E5] hover:bg-indigo-700 text-white px-8 py-2.5 rounded-lg font-bold shadow-lg transition-colors">
            Save Attendance
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatSmallCard label="Total Students" value="5" color="bg-blue-600" />
          <StatSmallCard label="Present" value="3" color="bg-green-500" />
          <StatSmallCard label="Absent" value="2" color="bg-red-400" />
        </div>

        {/* List */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="p-4 border-b font-black text-gray-700">
            Student Attendance
          </div>
          <div className="divide-y divide-gray-100">
            {students.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {s.initial}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{s.name}</p>
                    <p className="text-xs text-gray-400 font-medium">
                      {s.dept}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className={`px-6 py-1.5 rounded-lg text-xs font-black transition-all ${s.status === "Present" ? "bg-green-500 text-white shadow-md" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                  >
                    Present
                  </button>
                  <button
                    className={`px-6 py-1.5 rounded-lg text-xs font-black transition-all ${s.status === "Absent" ? "bg-red-400 text-white shadow-md" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                  >
                    Absent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminNavbar>
  );
}

export default Attendance;
