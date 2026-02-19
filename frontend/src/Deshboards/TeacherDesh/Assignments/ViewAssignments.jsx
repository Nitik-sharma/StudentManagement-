import React from "react";
import { FileText, Users, TrendingUp } from "lucide-react";
import TeacherNav from '../TeacherNav'

const ViewAssignments = () => {
  const assignments = [
    {
      name: "Data Structures - Mid-term",
      submissions: 118,
      avg: "82.4%",
      date: "Feb 15, 2026",
      status: "Graded",
    },
    {
      name: "Database Systems - Quiz 1",
      submissions: 120,
      avg: "78.2%",
      date: "Feb 10, 2026",
      status: "Graded",
    },
    {
      name: "Algorithms - Final Project",
      submissions: 115,
      avg: "88.9%",
      date: "Feb 05, 2026",
      status: "Graded",
    },
  ];

  return (
    <TeacherNav>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            View Assignments
          </h1>
          <p className="text-gray-500 font-semibold">
            Track and manage all submitted student assignments
          </p>
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-4">
              <FileText />
            </div>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
              Total Created
            </p>
            <p className="text-2xl font-black text-gray-800">12</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-4">
              <Users />
            </div>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
              Pending Grading
            </p>
            <p className="text-2xl font-black text-gray-800">02</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mb-4">
              <TrendingUp />
            </div>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
              Class Average
            </p>
            <p className="text-2xl font-black text-gray-800">83.1%</p>
          </div>
        </div>

        {/* Assignment Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest">
                  Assignment Title
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest text-center">
                  Submissions
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest text-center">
                  Avg Score
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest">
                  Created Date
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {assignments.map((asm, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                        A{i + 1}
                      </div>
                      <span className="font-bold text-gray-800">
                        {asm.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-5 text-center font-bold text-gray-600">
                    {asm.submissions}
                  </td>
                  <td className="p-5 text-center">
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full font-black text-xs">
                      {asm.avg}
                    </span>
                  </td>
                  <td className="p-5 font-bold text-gray-500 text-sm">
                    {asm.date}
                  </td>
                  <td className="p-5 text-right">
                    <button className="text-indigo-600 font-black text-xs uppercase hover:underline">
                      Edit Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </TeacherNav>
  );
};

export default ViewAssignments;
