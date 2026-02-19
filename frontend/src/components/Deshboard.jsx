import React from 'react'
import StudentDashboard from '../Deshboards/StudentDesh/StudentDashboard'
import TeacherDeshborad from '../Deshboards/TeacherDesh/TeacherDeshborad'
import AdminDeshboard from '../Deshboards/Admin/AdminDeshboard'

function Deshboard() {
    const user = JSON.parse(localStorage.getItem("userInfo"))
    
    const role = user.role
    console.log(role)
  return (
    <div>
      {role === "student" && <StudentDashboard />}
      {role === "teacher" && <TeacherDeshborad />}
      {role === "admin" && <AdminDeshboard />}
    </div>
  );
}

export default Deshboard