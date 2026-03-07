import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { Users } from "lucide-react";
import API from "../../service/api";

const AdminDeshboard = () => {
  const [studentData, setStudentData] = useState([]);
  const [marksData,setMarksData] =useState( []);
  
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/admin/students", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStudentData(res.data.students);
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const res = await API.get("/admin/students", {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         });

         const marksRes = await API.get("/MockTest/", {
           headers: {
             Authorization: `Bearer ${token}`,
           },
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
         setMarksData(combineData);
       } catch (error) {}
     };

     fetchData();
   }, []);
  console.log(marksData)

  return (
    <AdminNavbar>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1 mb-8 font-medium">
          Welcome to the Student Management System
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-10">
          {/* Total Students */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Users size={24} />
            </div>

            <div>
              <p className="text-gray-500 text-sm font-bold">Total Students</p>
              <p className="text-2xl font-black">{studentData.length}</p>
            </div>
          </div>

          {/* Total Courses (Static for now) */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#A855F7] flex items-center justify-center text-white font-bold">
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

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Students */}
          <section className="bg-white p-2 rounded-2xl border border-gray-50">
            <h3 className="text-lg font-black p-4">Recent Students</h3>

            <div className="space-y-3 px-4 pb-4">
              {studentData.slice(0, 4).map((student) => (
                <DataRow
                  key={student._id}
                  name={student.name}
                  detail={student.course}
                  badge={student.status || "Active"}
                  initial={student.name?.charAt(0)}
                />
              ))}
            </div>

            <button className="w-full py-3 text-blue-600 font-bold text-sm hover:underline">
              View All Students →
            </button>
          </section>

          {/* Recent Marks (Static for now) */}
          <section className="bg-white p-2 rounded-2xl border border-gray-50">
            <h3 className="text-lg font-black p-4">Recent Marks</h3>

            <div className="space-y-3 px-4 pb-4">
              {marksData.slice(0, 4).map((mark, index) => (
                <MarkRow
                  key={index}
                  name={mark.name}
                  exam={mark.subject}
                  score={`${mark.marks}/${mark.max}`}
                  pct={`${mark.pct}%`}
                />
              ))}
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

// Student Row
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
      className={`text-[10px] font-black px-2 py-1 rounded-md ${
        badge === "Active"
          ? "bg-[#D1FAE5] text-[#059669]"
          : "bg-[#FEE2E2] text-[#DC2626]"
      }`}
    >
      {badge}
    </span>
  </div>
);

// Marks Row
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
