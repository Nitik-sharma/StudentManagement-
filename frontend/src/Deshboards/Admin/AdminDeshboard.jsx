import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Users } from "lucide-react";

const AdminDeshboard = () => {
  return (
    <AdminNavbar>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1 mb-8 font-medium">
          Welcome to the Student Management System
        </p>

        {/* Stats Grid - Stacks on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Users size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm font-bold">Total Students</p>
              <p className="text-2xl font-black">5</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#A855F7] flex items-center justify-center text-white font-bold">
              {/* Icon placeholder to match image */}
              <div className="flex gap-0.5">
                <div className="w-2 h-4 bg-green-400 rounded-sm"></div>
                <div className="w-2 h-4 bg-blue-400 rounded-sm mt-1"></div>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-bold">Total Courses</p>
              <p className="text-2xl font-black">4</p>
            </div>
          </div>
        </div>

        {/* Tables Section - Stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Students */}
          <section className="bg-white p-2 rounded-2xl border border-gray-50">
            <h3 className="text-lg font-black p-4">Recent Students</h3>
            <div className="space-y-3 px-4 pb-4">
              <DataRow
                name="Rahul Sharma"
                detail="Computer Science"
                badge="Active"
                initial="R"
              />
              <DataRow
                name="Priya Patel"
                detail="Information Technology"
                badge="Active"
                initial="P"
              />
              <DataRow
                name="Arjun Singh"
                detail="Electronics"
                badge="InActive"
                initial="A"
              />
              <DataRow
                name="Sneha Gupta"
                detail="Mechanical Engineering"
                badge="Active"
                initial="S"
              />
            </div>
            <button className="w-full py-3 text-blue-600 font-bold text-sm hover:underline">
              View All Students →
            </button>
          </section>

          {/* Recent Marks */}
          <section className="bg-white p-2 rounded-2xl border border-gray-50">
            <h3 className="text-lg font-black p-4">Recent Marks</h3>
            <div className="space-y-3 px-4 pb-4">
              <MarkRow
                name="Rahul Sharma"
                exam="Data Structures-Mid-term"
                score="85/100"
                pct="85.0%"
              />
              <MarkRow
                name="Priya Patel"
                exam="Database Management-Final"
                score="92/100"
                pct="92.0%"
              />
              <MarkRow
                name="Arjun Singh"
                exam="Digital Electronics-Mid-term"
                score="78/100"
                pct="78.0%"
              />
              <MarkRow
                name="Rahul Sharma"
                exam="Algorithms-Final"
                score="88/100"
                pct="88.0%"
              />
            </div>
            <button className="w-full py-3 text-blue-600 font-bold text-sm hover:underline">
              View All Marks →
            </button>
          </section>
        </div>
      </div>
    </AdminNavbar>
  );
};

// Simplified Row Components
const DataRow = ({ name, detail, badge, initial }) => (
  <div className="flex items-center justify-between p-3 bg-[#FFF1F1] rounded-2xl border border-red-50">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
        {initial}
      </div>
      <div>
        <p className="font-bold text-sm">{name}</p>
        <p className="text-[11px] text-gray-500 font-medium">{detail}</p>
      </div>
    </div>
    <span
      className={`text-[10px] font-black px-2 py-1 rounded-md ${badge === "Active" ? "bg-[#D1FAE5] text-[#059669]" : "bg-[#FEE2E2] text-[#DC2626]"}`}
    >
      {badge}
    </span>
  </div>
);

const MarkRow = ({ name, exam, score, pct }) => (
  <div className="flex items-center justify-between p-3 bg-[#FFF1F1] rounded-2xl border border-red-50">
    <div className="min-w-0">
      <p className="font-bold text-sm truncate">{name}</p>
      <p className="text-[11px] text-gray-500 font-medium truncate">{exam}</p>
    </div>
    <div className="text-right ml-2">
      <p className="font-bold text-sm">{score}</p>
      <p className="text-[11px] text-green-600 font-black">{pct}</p>
    </div>
  </div>
);

export default AdminDeshboard;
