import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import API from '../../service/api'
import { Link } from "react-router-dom";

const StatCard = ({ label, value, icon, color }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm flex-1">
    <div
      className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white font-bold text-xl shadow-inner`}
    >
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
        {label}
      </p>
      <p className="text-xl font-black text-gray-800">{value}</p>
    </div>
  </div>
);

function Marks() {
  const [marksData,setMarksData] =useState( []);

  const token = localStorage.getItem("token")
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/admin/students", {
          headers: {
          Authorization:`Bearer ${token}`
        }
        });


        const marksRes = await API.get("/MockTest/", {
          headers: {
            Authorization:`Bearer ${token}`
          }
        });

        

        const studentsData = res.data.students;
        const marks = marksRes.data.mockTest;

        

        // console.log("marksRes", marks);

        // console.log("students", studentsData);
        

        const combineData = studentsData.map((student) => {
          const mark = marks.find(
            (m) =>
              (m.student?._id?.toString() || m.student?.toString()) ===
              student._id.toString(),
          );

          return {
            studentId: student._id,
            name: student.name,
            subject: mark?.testName ?? "-",
            marks: mark?.score ?? "-",
            max: mark?.maxScore ?? "-",
            pct: mark?.percentage ?? "-",
          };
        });
        setMarksData(combineData)




    } catch (error) {
      
    }
    }  
    
    fetchData()
  },[])

  console.log("MarksData", marksData)
  
  const higestMarks = marksData.length > 0 ? Math.max(...marksData.filter((m) => m.marks !== "-").map((m) => Number(m.marks))) : 0;
  return (
    <AdminNavbar>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Marks</h1>
            <p className="text-gray-500 font-medium">
              Manage student marks and grades
            </p>
          </div>
        </div>

        {/* Stats Summary Cards */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <StatCard
            label="Total Records"
            value={marksData.length}
            color="bg-blue-600"
            icon={<span className="text-xs">📊</span>}
          />
          <StatCard
            label="Highest Marks"
            value={higestMarks}
            color="bg-yellow-500"
            icon={<span className="text-xs">🏆</span>}
          />
          <StatCard
            label="Pass Rate"
            value="100.0%"
            color="bg-purple-500"
            icon={<span className="text-xs">🎯</span>}
          />
        </div>

        {/* Marks Table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-200">
                <th className="p-4 text-xs font-black uppercase text-gray-500 tracking-widest">
                  Student Name
                </th>
                <th className="p-4 text-xs font-black uppercase text-gray-500 tracking-widest">
                  Course
                </th>
                <th className="p-4 text-xs font-black uppercase text-gray-500 tracking-widest">
                  Subject
                </th>
                <th className="p-4 text-xs font-black uppercase text-gray-500 tracking-widest">
                  Marks
                </th>
                <th className="p-4 text-xs font-black uppercase text-gray-500 tracking-widest">
                  Max Marks
                </th>
                <th className="p-4 text-xs font-black uppercase text-gray-500 tracking-widest">
                  Percentage
                </th>
                <th className="p-4 text-xs font-black uppercase text-gray-500 tracking-widest">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {marksData.map((record, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50/30 transition-colors"
                >
                  <td className="p-4 text-sm font-bold text-gray-700">
                    {record.name}
                  </td>
                  <td className="p-4 text-sm font-medium text-gray-600">
                    {record.course}
                  </td>
                  <td className="p-4 text-sm font-medium text-gray-600">
                    {record.subject}
                  </td>
                  <td className="p-4 text-sm font-black text-gray-800">
                    {record.marks}
                  </td>
                  <td className="p-4 text-sm font-medium text-gray-500">
                    {record.max}
                  </td>
                  <td className="p-4 text-sm font-black text-blue-600">
                    {record.pct}
                  </td>
                  <td>
                    <Link
                      to={`/add-mock/${record.studentId}`}
                      className="bg-[#4F46E5] hover:bg-indigo-700 text-white px-8 py-2.5 rounded-lg font-bold shadow-lg transition-all transform active:scale-95"
                    >
                      <button>Add Marks</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminNavbar>
  );
}

export default Marks;
