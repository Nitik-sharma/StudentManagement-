import React, { useState } from "react";
import {
  FlaskConical,
  User,
  FileText,
  Award,
  Target,
  Save,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../service/api";

const AdminMockMarks = () => {
    const { id } = useParams();
  const [formData, setFormData] = useState({
    studentId: id,
    testName: "Data Structures",
    score: 85,
    maxScore: 100,
  });
    
    const navigate=useNavigate()
    
    
    console.log(id)

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      try {
          await API.post('/MockTest/add', formData, {
              headers: {
                  Authorization:`Bearer ${token}`
              }
          });


          alert("Marks Upload Sucessfully")
          navigate("/marks");
          
      } catch (error) {
        alert(error.message)
      }
  console.log(formData)
    
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 font-sans">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-100">
          <FlaskConical size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Admin: Mock Marks Entry
          </h1>
          <p className="text-gray-500 font-semibold mt-1">
            Input internal exam scores for student performance tracking
          </p>
        </div>
      </div>

      <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student ID Input */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Target Student (MongoDB ID)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500">
                <User size={18} />
              </span>
              <input
                name="studentId"
                value={formData.studentId}
                
                required
                placeholder="65f123456789..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
              />
            </div>
          </div>

          {/* Test Name Input */}
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Exam Title
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500">
                <FileText size={18} />
              </span>
              <input
                name="testName"
                value={formData.testName}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Score Input */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                Marks Obtained
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500">
                  <Award size={18} />
                </span>
                <input
                  type="number"
                  name="score"
                  value={formData.score}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Max Score Input */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                Total Marks
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500">
                  <Target size={18} />
                </span>
                <input
                  type="number"
                  name="maxScore"
                  value={formData.maxScore}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>
          </div>

          {/* Status Feedback */}
          {status.message && (
            <div
              className={`p-4 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center gap-2 border ${
                status.type === "success"
                  ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                  : "bg-red-50 text-red-600 border-red-100"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle size={16} />
              ) : (
                <AlertCircle size={16} />
              )}
              {status.message}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Save size={20} /> Update Student Score
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminMockMarks;
