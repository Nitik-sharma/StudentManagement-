import React, { useState, useEffect } from "react";
import {
  UserPlus,
  Mail,
  Phone,
  BookOpen,
  CheckCircle,
  Save,
  ArrowLeft,
  Hash,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../service/api";

const EditStudentForm = ({ studentId, onBack }) => {
  const { id } = useParams()
 const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    rollNo: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const token = localStorage.getItem("token")
  console.log(token)

  // 1. Fetch existing student data when the component loads
  useEffect(() => {

    const fetchStudent = async () => {

      try {
        const res = await API.get(`admin/student/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        //console.log(res.data.student);
        const studentData = res.data.student;
        console.log(studentData)

        setFormData({
          rollNo: studentData.rollNo,
          name: studentData.name,
          email: studentData.email,
          phone: studentData.phone,
          course: setFormData.course,
        });
      
      } catch (error) {
        
      }
    };

    if (id) {
      fetchStudent()
    }


   
  }, [id,token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
   
    try {
    const res=  await API.put(`admin/edit-students/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
    });
      
      if (res.data.success) {
        alert("Student updated successfully ✅");
      }

      navigate("/students");
    } catch (error) {
      console.log(error)
    }
   
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
            <UserPlus size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Edit Student
            </h2>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Update Information
            </p>
          </div>
        </div>
        <button
          onClick={onBack}
          className="p-3 hover:bg-gray-50 rounded-xl text-gray-400 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Roll Number
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Hash size={16} />
              </span>
              <input
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                required
                placeholder="CS001"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
              />
            </div>
          </div>
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
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Email (Login ID)
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
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100"
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
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100"
              />
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
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100 appearance-none"
              >
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
          className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl shadow-lg hover:bg-black transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Save size={18} /> Update Student Profile
        </button>
      </form>
    </div>
  );
};

export default EditStudentForm;
