import React, { useState } from "react";
import TeacherNav from "./TeacherNav";
import {
  Target,
  Search,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const PlacementPrediction = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data representing the ML Model output
  const predictionData = [
    {
      id: 1,
      name: "Rahul Sharma",
      roll: "CS001",
      probability: 92,
      status: "High Chance",
      initial: "R",
    },
    {
      id: 2,
      name: "Priya Patel",
      roll: "IT002",
      probability: 88,
      status: "High Chance",
      initial: "P",
    },
    {
      id: 3,
      name: "Arjun Singh",
      roll: "EC003",
      probability: 65,
      status: "Medium Chance",
      initial: "A",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      roll: "ME004",
      probability: 42,
      status: "Risk Student",
      initial: "S",
    },
    {
      id: 5,
      name: "Vikram Kumar",
      roll: "CS005",
      probability: 35,
      status: "Risk Student",
      initial: "V",
    },
  ];

  const filteredData = predictionData.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <TeacherNav>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              Placement Prediction (ML)
            </h1>
            <p className="text-gray-500 font-semibold mt-1">
              AI-driven probability analysis based on academic & mock
              performance
            </p>
          </div>
          <div className="bg-indigo-600 px-6 py-3 rounded-2xl text-white flex items-center gap-3 shadow-lg shadow-indigo-100">
            <Target size={20} />
            <span className="font-black text-sm uppercase tracking-wider">
              Model Accuracy: 89.4%
            </span>
          </div>
        </div>

        {/* Prediction Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PredictionSummaryCard
            label="High Chance Students"
            count="12"
            icon={<CheckCircle className="text-emerald-500" />}
            color="border-emerald-100 bg-emerald-50/30"
          />
          <PredictionSummaryCard
            label="Average Chance"
            count="28"
            icon={<TrendingUp className="text-blue-500" />}
            color="border-blue-100 bg-blue-50/30"
          />
          <PredictionSummaryCard
            label="Risk Students"
            count="05"
            icon={<AlertCircle className="text-red-500" />}
            color="border-red-100 bg-red-50/30"
          />
        </div>

        {/* Search and List */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between gap-4">
            <h3 className="font-black text-lg text-gray-800">
              Student Placement Probability
            </h3>
            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search students..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto font-sans">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50">
                <tr>
                  <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest">
                    Student Info
                  </th>
                  <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest">
                    ML Probability %
                  </th>
                  <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest">
                    Placement Badge
                  </th>
                  <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-xs">
                          {item.initial}
                        </div>
                        <div>
                          <p className="font-black text-sm text-gray-800 leading-none">
                            {item.name}
                          </p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase mt-1.5">
                            {item.roll}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="w-full bg-gray-100 h-2 rounded-full max-w-[100px]">
                          <div
                            className={`h-full rounded-full ${item.probability > 80 ? "bg-emerald-500" : item.probability > 50 ? "bg-blue-500" : "bg-red-500"}`}
                            style={{ width: `${item.probability}%` }}
                          ></div>
                        </div>
                        <span className="font-black text-gray-800 text-sm">
                          {item.probability}%
                        </span>
                      </div>
                    </td>
                    <td className="p-5">
                      <span
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${getStatusStyles(item.status)}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-5 text-right">
                      <button className="text-indigo-600 font-black text-[10px] uppercase hover:underline">
                        View Deep Analysis
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </TeacherNav>
  );
};

// --- Helper Functions and Components ---

const getStatusStyles = (status) => {
  switch (status) {
    case "High Chance":
      return "bg-emerald-100 text-emerald-600 border border-emerald-200";
    case "Medium Chance":
      return "bg-blue-100 text-blue-600 border border-blue-200";
    case "Risk Student":
      return "bg-red-100 text-red-600 border border-red-200";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const PredictionSummaryCard = ({ label, count, icon, color }) => (
  <div
    className={`p-6 rounded-3xl border ${color} shadow-sm flex items-center justify-between`}
  >
    <div>
      <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
        {label}
      </p>
      <p className="text-3xl font-black text-gray-800 mt-1">{count}</p>
    </div>
    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
      {icon}
    </div>
  </div>
);

export default PlacementPrediction;
