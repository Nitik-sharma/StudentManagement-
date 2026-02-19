import React, { useState } from "react";
import TeacherNav from "./TeacherNav";
import { Search, Filter, MoreVertical, ExternalLink } from "lucide-react";
import { NavLink } from "react-router-dom";

const TeacherStudents = () => {
  const [viewType, setViewType] = useState("cards");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data based on your "Manage Students" requirements
  const studentsData = [
    {
      id: 1,
      name: "Rahul Sharma",
      roll: "CS001",
      email: "rahul.sharma@email.com",
      course: "Computer Science",
      status: "Active",
      initial: "R",
      performance: "85%",
    },
    {
      id: 2,
      name: "Priya Patel",
      roll: "IT002",
      email: "priya.patel@email.com",
      course: "Information Technology",
      status: "Active",
      initial: "P",
      performance: "92%",
    },
    {
      id: 3,
      name: "Sneha Gupta",
      roll: "ME004",
      email: "sneha.gupta@email.com",
      course: "Mechanical Engineering",
      status: "Inactive",
      initial: "S",
      performance: "65%",
    },
    {
      id: 4,
      name: "Arjun Singh",
      roll: "EC003",
      email: "arjun.singh@email.com",
      course: "Electronics",
      status: "Active",
      initial: "A",
      performance: "78%",
    },
  ];

  const filteredStudents = studentsData.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.roll.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <TeacherNav>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header: Title and View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight text-sans">
              Students
            </h1>
            <p className="text-gray-500 font-semibold">
              Manage student information ({filteredStudents.length} total)
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex bg-gray-200 p-1 rounded-xl shadow-inner">
              <button
                onClick={() => setViewType("cards")}
                className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${viewType === "cards" ? "bg-white shadow-sm text-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                Cards
              </button>
              <button
                onClick={() => setViewType("table")}
                className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${viewType === "table" ? "bg-white shadow-sm text-indigo-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                Table
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="relative flex-1 w-full">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search students by name or roll..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-100 font-bold text-sm transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 font-bold rounded-xl text-sm hover:bg-gray-200 transition-all">
            <Filter size={16} /> Filters
          </button>
        </div>

        {/* Dynamic View */}
        {viewType === "cards" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        ) : (
          <StudentTable students={filteredStudents} />
        )}
      </div>
    </TeacherNav>
  );
};

// --- Sub-Components ---

const StudentCard = ({ student }) => (
  <div className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-transparent hover:border-indigo-400 transition-all group">
    <div className="flex gap-5">
      <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-100 flex-shrink-0">
        {student.initial}
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-black text-lg text-gray-800 leading-tight">
              {student.name}
            </h3>
            <p className="text-xs font-bold text-indigo-500">
              Roll: {student.roll}
            </p>
          </div>
          <span
            className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${student.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
          >
            {student.status}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-y-1 text-[13px] text-gray-600 font-bold mb-4">
          <p>📧 {student.email}</p>
          <p>📚 {student.course}</p>
        </div>

        <div className="flex gap-3 mt-5">
          <button className="flex-1 bg-indigo-600 text-white py-2.5 rounded-xl text-xs font-black shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
            <NavLink to={"/performance"}> Performance</NavLink>{" "}
            <ExternalLink size={14} />
          </button>
          <button className="px-3 bg-gray-100 text-gray-600 py-2.5 rounded-xl hover:bg-gray-200 transition-all">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const StudentTable = ({ students }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <table className="w-full text-left">
      <thead className="bg-gray-50/50 border-b border-gray-100">
        <tr>
          <th className="p-4 text-[11px] font-black uppercase text-gray-500 tracking-widest">
            Name
          </th>
          <th className="p-4 text-[11px] font-black uppercase text-gray-500 tracking-widest">
            Email
          </th>
          <th className="p-4 text-[11px] font-black uppercase text-gray-500 tracking-widest">
            Course
          </th>
          <th className="p-4 text-[11px] font-black uppercase text-gray-500 tracking-widest text-center">
            Performance
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {students.map((s) => (
          <tr
            key={s.id}
            className="hover:bg-indigo-50/20 transition-colors font-sans"
          >
            <td className="p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-black">
                {s.initial}
              </div>
              <div>
                <p className="text-sm font-black text-gray-800 leading-tight">
                  {s.name}
                </p>
                <p className="text-[10px] text-indigo-500 font-bold uppercase">
                  {s.roll}
                </p>
              </div>
            </td>
            <td className="p-4 text-xs font-bold text-gray-600">{s.email}</td>
            <td className="p-4 text-xs font-bold text-gray-600">{s.course}</td>
            <td className="p-4 text-center">
              <button className="text-xs font-black text-indigo-600 hover:underline uppercase tracking-tight">
                View Performance
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TeacherStudents;
