import React, { useEffect, useState } from "react";
import TeacherNav from "../TeacherNav";
import { FlaskConical, Target, Award } from "lucide-react";
import API from "../../../service/api";

const ViewMockTests = () => {
  const token=localStorage.getItem("token")
  const [mockHistory,setMockHistory] =useState([])

  useEffect(() => {
    const fetchData =async () => {
       try {
        const res = await API.get("/MockTest/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
         
        
        const mock = res.data.mockTest;
         setMockHistory(mock)
       } catch (error) {
         console.log(error.message)
       }
    }
    
    fetchData()
  }, [])
  
  console.log(mockHistory)
  const highestMarks =
    mockHistory.length > 0
      ? Math.max(
          ...mockHistory
            .filter((m) => m.score !== "-")
            .map((m) => Number(m.score)),
        )
      : 0;
  
 const averageScore =
   mockHistory.length > 0
     ? (
         mockHistory.reduce((sum, m) => sum + Number(m.score), 0) /
         mockHistory.length
       ).toFixed(1)
     : 0;

  
  return (
    <TeacherNav>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Mock Test Performance
          </h1>
          <p className="text-gray-500 font-semibold">
            Analyze class-wide performance in mock examinations
          </p>
        </div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MockStat
            icon={<FlaskConical />}
            label="Total Mock Tests"
            value={mockHistory.length}
            color="bg-purple-600"
          />
          <MockStat
            icon={<Target />}
            label="Avg. Class Score"
            value={averageScore}
            color="bg-indigo-600"
          />
          <MockStat
            icon={<Award />}
            label="Highest Score"
            value={highestMarks}
            color="bg-amber-500"
          />
        </div>

        {/* Mock Test Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest">
                  Test Name & Date
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest text-center">
                  Score
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest">
                  StudentName
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest text-right">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-sans">
              {mockHistory.map((mock, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5">
                    <p className="font-black text-gray-800 text-sm leading-tight">
                      {mock.testName}
                    </p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">
                      {mock.createdAt.split("T")[0]}
                    </p>
                  </td>
                  <td className="p-5 text-center">
                    <span className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full font-black text-xs">
                      {mock.score}
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-[10px] font-bold">
                        ★
                      </div>
                      <span className="text-sm font-bold text-gray-700">
                        {mock.student.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-5 text-right">
                    <span
                      className={`text-[10px] font-black uppercase px-3 py-1 rounded-md 
    ${mock.percentage >= 50 ? "text-green-500 bg-green-50" : "text-red-500 bg-red-50"}`}
                    >
                      {mock.percentage >= 50 ? "Pass" : "Fail"}
                    </span>
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

const MockStat = ({ icon, label, value, color }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
    <div
      className={`${color} w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg`}
    >
      {icon}
    </div>
    <div>
      <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider leading-none">
        {label}
      </p>
      <p className="text-2xl font-black text-gray-800 mt-1">{value}</p>
    </div>
  </div>
);

export default ViewMockTests;
