import React, { useEffect, useState } from "react";
import { FileText, Users, TrendingUp } from "lucide-react";
import TeacherNav from '../TeacherNav'
import API from "../../../service/api";

const ViewAssignments = () => {
  const [assignments,setAssignments ]= useState([]);

  const token = localStorage.getItem("token")
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/addAssignment/all", {
          headers: {
            Authorization:`Bearer ${token}`
          }
        });

      
        const resAssignment = res.data.assignments;
        setAssignments(resAssignment)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData()
  }, [])
  
  console.log(assignments)

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
            <p className="text-2xl font-black text-gray-800">{assignments.length }</p>
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
                {/* <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest text-center">
                  Submissions
                </th> */}
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest text-center">
                  Score
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest">
                  Created Date
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest text-right">
                  Total Marks
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
                        {asm.assignmentName}
                      </span>
                    </div>
                  </td>
                  {/* <td className="p-5 text-center font-bold text-gray-600">
                    {asm.submissions}
                  </td> */}
                  <td className="p-5 text-center">
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full font-black text-xs">
                      {asm.obtainedMarks}
                    </span>
                  </td>
                  <td className="p-5 font-bold text-gray-500 text-sm">
                    {asm.createdAt.split("T")[0]}
                  </td>
                  <td className="p-5 font-bold text-gray-500 text-sm">
                    {asm.totalMarks}
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
