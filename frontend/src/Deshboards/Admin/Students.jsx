import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar';
import API from '../../service/api'
import { Link, NavLink } from 'react-router-dom';

function Students() {
  

  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    const token=localStorage.getItem("token")
    const getStudents =async () => {
      const studeentsData = await API.get("/admin/students", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const getData = studeentsData.data.students;
      // console.log(getData)
      setStudents(getData)
    }
    getStudents()
  },[])
   console.log(students)
  return (
    <AdminNavbar>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Students</h1>
            <p className="text-gray-500 font-medium">
              Manage student information ({students.length})
            </p>
          </div>
          <div className="flex gap-4">
            <Link to={"/add-student"}>
              <button className="bg-[#4F46E5] text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-indigo-200">
                Add Student
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {students.map((s, i) => (
            <div
              key={i}
              className={`bg-white p-6 rounded-3xl shadow-sm border-2 transition-all ${s.focus ? "border-blue-500 shadow-md" : "border-transparent"}`}
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {s.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-black text-lg truncate">{s.name}</h3>
                    <span
                      className={`text-[10px] font-black px-2 py-1 rounded-md ${s.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                    >
                      {s.status}
                    </span>
                  </div>
                  <div className="text-[13px] text-gray-600 space-y-1 font-semibold">
                    <p>Roll: {s.rollNo}</p>
                    <p>Email: {s.email}</p>
                    <p>Course: {s.course}</p>
                    <p>Phone: {s.phone}</p>
                    <p className="pt-2 text-gray-400 text-center">
                      {s.location}
                    </p>
                  </div>
                  <div className="flex mt-5">
                    <NavLink
                      to={`/edit-student/${s._id}`}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center transition-all shadow-lg shadow-indigo-100 active:scale-[0.98]"
                    >
                      Edit Student Profile
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminNavbar>
  );
}

export default Students