import React, { useState } from "react";
import {
  UserPlus,
  Mail,
  Lock,
  Phone,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import API from "../../service/api";
import { useNavigate } from "react-router-dom";

const AddStudentForm = () => {
  
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    course: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    const token = localStorage.getItem("token")
    console.log(token)

    try {
      await API.post("/admin/add-student", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
     
      navigate("/students");


    } catch (error) {
      setStatus({ type: "error", message: "Server error. Please try again." });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
          <UserPlus size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Add New Student
          </h2>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            Enrollment Portal
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <UserPlus size={16} />
              </span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Rahul Sharma"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={16} />
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="rahul@test.com"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Default Password
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={16} />
              </span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Phone size={16} />
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="9876543210"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Course Selection */}
        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
            Enrolled Course
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <BookOpen size={16} />
            </span>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100 transition-all appearance-none"
            >
              <option value="">Select a Course</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
            </select>
          </div>
        </div>

        {/* Status Message */}
        {status.message && (
          <div
            className={`p-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 ${
              status.type === "success"
                ? "bg-emerald-50 text-emerald-600"
                : "bg-red-50 text-red-600"
            }`}
          >
            {status.type === "success" && <CheckCircle size={14} />}
            {status.message}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-4 bg-indigo-600 text-white font-black rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all transform active:scale-[0.98]"
        >
          Register Student
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
