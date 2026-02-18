import React, { useState } from 'react'
import './App.css'
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Deshboard from './components/Deshboard';
import Students from './Deshboards/Admin/Students';
import Attendance from './Deshboards/Admin/Attendance';
import Courses from './Deshboards/Admin/Courses';
import Marks from './Deshboards/Admin/Marks';
import AdminDeshboard from './Deshboards/Admin/AdminDeshboard';
import TeacherStudents from './Deshboards/TeacherDesh/TeacherStudents';
import MarkAttendance from './Deshboards/TeacherDesh/Attendance/MarkAttendance';
import ViewAttendance from './Deshboards/TeacherDesh/Attendance/ViewAttendance';
import AddMockMarks from './Deshboards/TeacherDesh/MockTest/AddMockMarks';
import ViewMockMarks from './Deshboards/TeacherDesh/MockTest/ViewMockMarks';
import PlacemtPridiction from './Deshboards/TeacherDesh/PlacemtPridiction';
import Profile from './Deshboards/TeacherDesh/Profile';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/deshboard" element={<Deshboard />} />
          <Route path="/admiDeshboard" element={<AdminDeshboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/teacher/students" element={<TeacherStudents />} />
          <Route path="/attendance/mark" element={<MarkAttendance />} />
          <Route path="/attendance/view" element={<ViewAttendance />} />
          <Route path="/performance" element={<performance />} />
          <Route path="/mocktests/add" element={<AddMockMarks />} />
          <Route path="/mocktests/view" element={<ViewMockMarks />} />
          <Route path="/prediction" element={<PlacemtPridiction />} />
          <Route path="/prfile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
