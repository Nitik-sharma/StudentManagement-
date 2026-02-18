import React from "react";
import TeacherNav from "./TeacherNav";
import {
  Users,
  FileText,
  FlaskConical,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const TeacherDashboard = () => {
  return (
    <TeacherNav>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-black text-gray-900">Dashboard</h1>
          <p className="text-gray-500 font-semibold mt-1">
            Welcome to the Student Management System
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Students"
            value="120"
            icon={<Users />}
            color="bg-blue-600"
            shadow="shadow-blue-100"
          />
          <StatCard
            title="Assignments"
            value="12"
            icon={<FileText />}
            color="bg-orange-500"
            shadow="shadow-orange-100"
          />
          <StatCard
            title="Mock Tests"
            value="08"
            icon={<FlaskConical />}
            color="bg-purple-600"
            shadow="shadow-purple-100"
          />
          <StatCard
            title="Courses"
            value="04"
            icon={<BookOpen />}
            color="bg-emerald-600"
            shadow="shadow-emerald-100"
          />
        </div>

        {/* Lists Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Students */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-lg text-gray-800 tracking-tight">
                Recent Students
              </h3>
              <button className="text-indigo-600 font-bold text-xs flex items-center gap-1 hover:underline">
                View All <ArrowRight size={14} />
              </button>
            </div>
            <div className="space-y-4">
              <DashboardRow
                name="Rahul Sharma"
                detail="Computer Science"
                badge="Active"
                initial="R"
                color="bg-blue-600"
              />
              <DashboardRow
                name="Priya Patel"
                detail="Information Tech"
                badge="Active"
                initial="P"
                color="bg-blue-600"
              />
              <DashboardRow
                name="Arjun Singh"
                detail="Electronics"
                badge="InActive"
                initial="A"
                color="bg-blue-600"
              />
            </div>
          </div>

          {/* Recent Marks */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-lg text-gray-800 tracking-tight">
                Recent Marks
              </h3>
              <button className="text-indigo-600 font-bold text-xs flex items-center gap-1 hover:underline">
                View All <ArrowRight size={14} />
              </button>
            </div>
            <div className="space-y-4">
              <MarkRow
                name="Rahul Sharma"
                exam="Data Structures-Mid-term"
                score="85/100"
                pct="85.0%"
              />
              <MarkRow
                name="Priya Patel"
                exam="Database-Final"
                score="92/100"
                pct="92.0%"
              />
              <MarkRow
                name="Arjun Singh"
                exam="Electronics-Mid-term"
                score="78/100"
                pct="78.0%"
              />
            </div>
          </div>
        </div>
      </div>
    </TeacherNav>
  );
};

// --- Sub-components ---

const StatCard = ({ title, value, icon, color, shadow }) => (
  <div
    className={`bg-white p-6 rounded-3xl border border-gray-50 shadow-sm transition-transform hover:-translate-y-1`}
  >
    <div
      className={`${color} w-11 h-11 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg ${shadow}`}
    >
      {icon}
    </div>
    <p className="text-gray-500 text-xs font-black uppercase tracking-wider">
      {title}
    </p>
    <p className="text-2xl font-black text-gray-900 mt-1">{value}</p>
  </div>
);

const DashboardRow = ({ name, detail, badge, initial, color }) => (
  <div className="flex items-center justify-between p-3.5 bg-[#FFF1F1] rounded-2xl border border-red-50/50">
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-full ${color} text-white flex items-center justify-center font-bold text-sm`}
      >
        {initial}
      </div>
      <div>
        <p className="font-black text-sm text-gray-800">{name}</p>
        <p className="text-[11px] text-gray-500 font-bold">{detail}</p>
      </div>
    </div>
    <span
      className={`text-[10px] font-black px-2.5 py-1 rounded-md ${badge === "Active" ? "bg-[#D1FAE5] text-[#059669]" : "bg-[#FEE2E2] text-[#DC2626]"}`}
    >
      {badge}
    </span>
  </div>
);

const MarkRow = ({ name, exam, score, pct }) => (
  <div className="flex items-center justify-between p-3.5 bg-[#FFF1F1] rounded-2xl border border-red-50/50">
    <div className="min-w-0">
      <p className="font-black text-sm text-gray-800 truncate">{name}</p>
      <p className="text-[11px] text-gray-500 font-bold truncate">{exam}</p>
    </div>
    <div className="text-right ml-4">
      <p className="font-black text-sm text-gray-900">{score}</p>
      <p className="text-[11px] text-green-600 font-black">{pct}</p>
    </div>
  </div>
);

export default TeacherDashboard;
  