import React from "react";
import TeacherNav from "./TeacherNav";
import {
  User,
  CheckCircle,
  FileText,
  FlaskConical,
  TrendingUp,
  Award,
  Calendar,
} from "lucide-react";

const StudentPerformance = () => {
  // Mock data for a specific student's performance
  const studentProfile = {
    name: "Rahul Sharma",
    roll: "CS001",
    course: "Computer Science",
    email: "rahul.sharma@email.com",
    cgpa: "8.4",
    overallStatus: "Excellent",
  };

  return (
    <TeacherNav>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Profile Header Section */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-4xl shadow-xl shadow-indigo-100">
              R
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-900 leading-tight">
                {studentProfile.name}
              </h1>
              <p className="text-indigo-500 font-bold uppercase tracking-wider text-sm">
                {studentProfile.course} | {studentProfile.roll}
              </p>
              <p className="text-gray-400 font-medium text-sm mt-1">
                {studentProfile.email}
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">
              Current CGPA
            </p>
            <p className="text-5xl font-black text-indigo-600">
              {studentProfile.cgpa}
            </p>
          </div>
        </div>

        {/* Performance Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PerformanceCard
            icon={<Calendar />}
            label="Attendance %"
            value="92%"
            color="bg-blue-600"
            sub="24/26 Days"
          />
          <PerformanceCard
            icon={<FileText />}
            label="Assignment Avg"
            value="85.4%"
            color="bg-orange-500"
            sub="12 Submissions"
          />
          <PerformanceCard
            icon={<FlaskConical />}
            label="Mock Test Avg"
            value="78.0%"
            color="bg-purple-600"
            sub="08 Tests"
          />
          <PerformanceCard
            icon={<TrendingUp />}
            label="Overall Grade"
            value="A"
            color="bg-emerald-600"
            sub="Top 10% of Class"
          />
        </div>

        {/* Detailed Breakdowns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Summary */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-black text-lg text-gray-800 mb-6 flex items-center gap-2">
              <Award className="text-amber-500" size={20} /> Achievement Summary
            </h3>
            <div className="space-y-4 font-sans">
              <ProgressBar
                label="Attendance"
                percentage={92}
                color="bg-blue-500"
              />
              <ProgressBar
                label="Technical Skills"
                percentage={88}
                color="bg-indigo-500"
              />
              <ProgressBar
                label="Soft Skills"
                percentage={75}
                color="bg-purple-500"
              />
              <ProgressBar
                label="Lab Work"
                percentage={95}
                color="bg-emerald-500"
              />
            </div>
          </div>

          {/* Recent Records */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-black text-lg text-gray-800 mb-6 flex items-center gap-2">
              <CheckCircle className="text-indigo-500" size={20} /> Latest
              Results
            </h3>
            <div className="space-y-3">
              <ResultRow title="End-term Mock" score="92/100" date="Feb 15" />
              <ResultRow
                title="Data Structures Assignment"
                score="85/100"
                date="Feb 10"
              />
              <ResultRow title="Weekly Quiz" score="10/10" date="Feb 02" />
            </div>
          </div>
        </div>
      </div>
    </TeacherNav>
  );
};

// --- Sub-Components ---

const PerformanceCard = ({ icon, label, value, color, sub }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-50 shadow-sm hover:translate-y-[-4px] transition-all">
    <div
      className={`${color} w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg opacity-90`}
    >
      {icon}
    </div>
    <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider">
      {label}
    </p>
    <p className="text-2xl font-black text-gray-800 mt-1">{value}</p>
    <p className="text-[11px] text-gray-400 font-bold mt-2">{sub}</p>
  </div>
);

const ProgressBar = ({ label, percentage, color }) => (
  <div>
    <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-gray-500 mb-1">
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
      <div
        className={`${color} h-full transition-all duration-1000`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const ResultRow = ({ title, score, date }) => (
  <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
    <div>
      <p className="font-black text-sm text-gray-800 leading-none">{title}</p>
      <p className="text-[10px] text-gray-400 font-bold uppercase mt-1.5">
        {date}
      </p>
    </div>
    <div className="bg-white px-4 py-1.5 rounded-xl border border-gray-200 font-black text-indigo-600 text-sm shadow-sm">
      {score}
    </div>
  </div>
);

export default StudentPerformance;
