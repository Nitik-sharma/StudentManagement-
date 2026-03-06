import React, { useState } from "react";
import {
  BookOpen,
  Hash,
  User,
  Clock,
  IndianRupee,
  Save,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import API from "../../service/api";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    instructor: "",
    duration: "",
    fees: "",
  });

  const navigate=useNavigate()

 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const token = localStorage.getItem("token");
console.log(token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      await API.post("/admin/add-course", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Course added successfully ✅");
      
      navigate("/courses");
    } catch (error) {
      alert(error.message)
    }
    
    console.log(formData)
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 font-sans">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">
          Create New Course
        </h1>
        <p className="text-gray-500 font-semibold mt-1">
          Register a new subject into the academic database
        </p>
      </div>

      <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Course Name */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Course Name
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500">
                <BookOpen size={18} />
              </span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g. Computer Science"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course Code */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                Course Code
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500">
                  <Hash size={18} />
                </span>
                <input
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  required
                  placeholder="e.g. CS"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Instructor Name */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                Instructor Name
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500">
                  <User size={18} />
                </span>
                <input
                  name="instructor"
                  value={formData.instructor}
                  onChange={handleChange}
                  required
                  placeholder="Dr. Rajesh Kumar"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Course Duration */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                Duration
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500">
                  <Clock size={18} />
                </span>
                <input
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 4 Years"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Course Fees */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                Course Fees
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500">
                  <IndianRupee size={18} />
                </span>
                <input
                  type="number"
                  name="fees"
                  value={formData.fees}
                  onChange={handleChange}
                  required
                  placeholder="250000"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>
          </div>

          {/* Status Messages */}
          

          <button
            type="submit"
            className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Save size={20} /> Add Course to System
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
