import React from 'react'
import StudentDeshboard from '../Deshboards/StudentDesh/StudentDeshboard'
import TeacherDeshborad from '../Deshboards/TeacherDesh/TeacherDeshborad'
import AdminDeshboard from '../Deshboards/Admin/AdminDeshboard'

function Deshboard() {
    const user = JSON.parse(localStorage.getItem("userInfo"))
    
    const role = user.role
    console.log(role)
  return (
    <div>
      {role === "student" && <StudentDeshboard />}
      {role === "teacher" && <TeacherDeshborad />}
      {role === "admin" && <AdminDeshboard />}
    </div>
  );
}

export default Deshboard