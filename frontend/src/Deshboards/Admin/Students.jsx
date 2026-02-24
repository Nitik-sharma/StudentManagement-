import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar';
import API from '../../service/api'
import { Link } from 'react-router-dom';

function Students() {
  // const students = [
  //   {
  //     name: "Rahul Sharma",
  //     roll: "CS001",
  //     email: "rahul@email.com",
  //     course: "Computer Science",
  //     phone: "+91-9867543001",
  //     location: "Mumbai, Maharashtra",
  //     status: "Active",
  //     initial: "R",
  //     focus: true,
  //   },
  //   {
  //     name: "Priya Patel",
  //     roll: "IT002",
  //     email: "priya@email.com",
  //     course: "IT",
  //     phone: "+91-9867543001",
  //     location: "Ahmedabad, Gujarat",
  //     status: "Active",
  //     initial: "P",
  //   },
  //   {
  //     name: "Sneha Gupta",
  //     roll: "ME004",
  //     email: "sneha@email.com",
  //     course: "Mechanical",
  //     phone: "+91-9867543001",
  //     location: "Pune, Maharashtra",
  //     status: "Inactive",
  //     initial: "S",
  //   },
  //   {
  //     name: "Arjun Singh",
  //     roll: "EC003",
  //     email: "arjun@email.com",
  //     course: "Electronics",
  //     phone: "+91-9867543001",
  //     location: "Delhi, India",
  //     status: "Active",
  //     initial: "A",
  //   },
  // ];

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
              Manage student information (4 total)
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex bg-gray-200 p-1 rounded-lg text-sm font-bold">
              <button className="px-4 py-1 bg-white rounded shadow">
                Cards
              </button>
              <button className="px-4 py-1 text-gray-500">Table</button>
            </div>
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
                    <p>Roll: {s.roll}</p>
                    <p>Email: {s.email}</p>
                    <p>Course: {s.course}</p>
                    <p>Phone: {s.phone}</p>
                    <p className="pt-2 text-gray-400 text-center">
                      {s.location}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-5">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl text-xs font-bold">
                      Edit
                    </button>
                    <button className="flex-1 bg-[#FF8A8A] text-white py-2 rounded-xl text-xs font-bold">
                      Delete
                    </button>
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