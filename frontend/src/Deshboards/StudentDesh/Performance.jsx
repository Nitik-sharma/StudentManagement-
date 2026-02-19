import React from "react";
import StudentNav from "./StudentNav";
import {
  TrendingUp,
  FileText,
  FlaskConical,
  MessageSquare,
  AlertTriangle,
  Award,
  CheckCircle,
} from "lucide-react";

const Performance = () => {
  return (
    <StudentNav>
      <div className="max-w-7xl mx-auto space-y-8 font-sans">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              Academic Performance
            </h1>
            <p className="text-gray-500 font-semibold mt-1">
              Detailed analysis of your course progress and placement readiness
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Current CGPA
            </p>
            <p className="text-3xl font-black text-indigo-600 leading-none">
              8.42
            </p>
          </div>
        </div>

        {/* Primary Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            label="Assignment Avg"
            value="82.5%"
            sub="12 Submissions"
            icon={<FileText size={20} />}
            color="bg-orange-500"
          />
          <MetricCard
            label="Mock Test Avg"
            value="76.0%"
            sub="08 Tests"
            icon={<FlaskConical size={20} />}
            color="bg-purple-600"
          />
          <MetricCard
            label="Aptitude Score"
            value="88/100"
            sub="Top 5% of Class"
            icon={<TrendingUp size={20} />}
            color="bg-blue-600"
          />
          <MetricCard
            label="Comm. Rating"
            value="4.5/5"
            sub="Excellent"
            icon={<MessageSquare size={20} />}
            color="bg-emerald-600"
          />
        </div>

        {/* Risk & Backlog Alert (Shows only if backlogs > 0) */}
        <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white shadow-sm">
            <AlertTriangle size={20} />
          </div>
          <div>
            <p className="text-xs font-black text-red-600 uppercase tracking-widest">
              Active Backlogs
            </p>
            <p className="text-sm font-bold text-red-800">
              You currently have{" "}
              <span className="underline">01 active backlog</span> in "Advanced
              Mathematics". Clear this to improve placement eligibility.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Assignment Table */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
              <h3 className="font-black text-lg text-gray-800">
                Assignment History
              </h3>
              <span className="text-[10px] font-black text-orange-500 bg-orange-50 px-3 py-1 rounded-full uppercase">
                Weightage: 30%
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="p-4 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                      Project/Task
                    </th>
                    <th className="p-4 text-[10px] font-black uppercase text-gray-400 tracking-widest text-center">
                      Marks
                    </th>
                    <th className="p-4 text-[10px] font-black uppercase text-gray-400 tracking-widest text-right">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <DataRow
                    title="React Dashboard UI"
                    score="19/20"
                    pct="95%"
                    status="Graded"
                  />
                  <DataRow
                    title="Backend API Design"
                    score="40/50"
                    pct="80%"
                    status="Graded"
                  />
                  <DataRow
                    title="Database Normalization"
                    score="23/25"
                    pct="92%"
                    status="Graded"
                  />
                </tbody>
              </table>
            </div>
          </div>

          {/* Mock Test Table */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
              <h3 className="font-black text-lg text-gray-800">
                Mock Test Scores
              </h3>
              <span className="text-[10px] font-black text-purple-500 bg-purple-50 px-3 py-1 rounded-full uppercase">
                Weightage: 70%
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="p-4 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                      Test Name
                    </th>
                    <th className="p-4 text-[10px] font-black uppercase text-gray-400 tracking-widest text-center">
                      Score
                    </th>
                    <th className="p-4 text-[10px] font-black uppercase text-gray-400 tracking-widest text-right">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <DataRow
                    title="Technical Mock 1"
                    score="75/100"
                    pct="75%"
                    status="Clear"
                  />
                  <DataRow
                    title="Aptitude Screening"
                    score="48/50"
                    pct="96%"
                    status="Clear"
                  />
                  <DataRow
                    title="Logical Reasoning"
                    score="18/20"
                    pct="90%"
                    status="Clear"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </StudentNav>
  );
};

// --- Reusable Sub-components ---

const MetricCard = ({ label, value, sub, icon, color }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-50 shadow-sm transition-transform hover:-translate-y-1">
    <div
      className={`${color} w-11 h-11 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-gray-100`}
    >
      {icon}
    </div>
    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
      {label}
    </p>
    <p className="text-2xl font-black text-gray-900 mt-1 leading-none">
      {value}
    </p>
    <p className="text-[11px] text-gray-500 font-bold mt-2">{sub}</p>
  </div>
);

const DataRow = ({ title, score, pct, status }) => (
  <tr className="hover:bg-gray-50/50 transition-colors">
    <td className="p-4">
      <p className="font-bold text-sm text-gray-800">{title}</p>
    </td>
    <td className="p-4 text-center">
      <p className="font-black text-sm text-indigo-600">{score}</p>
      <p className="text-[10px] text-gray-400 font-bold">{pct}</p>
    </td>
    <td className="p-4 text-right">
      <span
        className={`text-[10px] font-black px-3 py-1 rounded-md uppercase ${
          status === "Clear" || status === "Graded"
            ? "bg-emerald-50 text-emerald-600"
            : "bg-red-50 text-red-600"
        }`}
      >
        {status}
      </span>
    </td>
  </tr>
);

export default Performance;
