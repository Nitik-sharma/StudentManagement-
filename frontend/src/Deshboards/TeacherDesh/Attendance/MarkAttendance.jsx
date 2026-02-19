import React, { useState } from "react";
import TeacherNav from "../TeacherNav";

const MarkAttendance = () => {
  const [attendance, setAttendance] = useState([
    { id: 1, name: "Rahul Sharma", roll: "CS001", initial: "R", status: null },
    { id: 2, name: "Priya Patel", roll: "IT002", initial: "P", status: null },
    { id: 3, name: "Arjun Singh", roll: "EC003", initial: "A", status: null },
    { id: 4, name: "Sneha Gupta", roll: "ME004", initial: "S", status: null },
  ]);

  const toggleStatus = (id, status) => {
    setAttendance((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s)),
    );
  };

  return (
    <TeacherNav>
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Mark Attendance
          </h1>
          <p className="text-gray-500 font-semibold">
            Select course and date to record daily attendance
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-end">
          <div className="flex-1 w-full">
            <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">
              Select Course
            </label>
            <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl font-bold text-gray-700 focus:ring-2 focus:ring-indigo-100 outline-none">
              <option>Computer Science - Section A</option>
              <option>Information Technology - Section B</option>
            </select>
          </div>
          <div className="flex-1 w-full">
            <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">
              Select Date
            </label>
            <input
              type="date"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl font-bold text-gray-700"
              defaultValue="2026-02-19"
            />
          </div>
          <button className="bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-black text-sm shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all w-full md:w-auto">
            Save Attendance
          </button>
        </div>

        {/* Student List */}
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
            <span className="font-black text-gray-700 uppercase text-xs tracking-widest">
              Student List
            </span>
            <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
              4 Students Total
            </span>
          </div>
          <div className="divide-y divide-gray-100">
            {attendance.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-5 hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-sm">
                    {student.initial}
                  </div>
                  <div>
                    <p className="font-black text-sm text-gray-800">
                      {student.name}
                    </p>
                    <p className="text-[11px] text-gray-400 font-bold uppercase">
                      {student.roll}
                    </p>
                  </div>
                </div>

                {/* Status Toggles */}
                <div className="flex bg-gray-100 p-1 rounded-xl gap-1">
                  <button
                    onClick={() => toggleStatus(student.id, "Present")}
                    className={`px-6 py-2 rounded-lg text-xs font-black transition-all ${student.status === "Present" ? "bg-green-500 text-white shadow-md" : "text-gray-500 hover:bg-gray-200"}`}
                  >
                    Present
                  </button>
                  <button
                    onClick={() => toggleStatus(student.id, "Absent")}
                    className={`px-6 py-2 rounded-lg text-xs font-black transition-all ${student.status === "Absent" ? "bg-red-500 text-white shadow-md" : "text-gray-500 hover:bg-gray-200"}`}
                  >
                    Absent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TeacherNav>
  );
};

export default MarkAttendance;
