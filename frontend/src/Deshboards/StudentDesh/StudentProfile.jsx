import React, { useEffect, useState } from "react";
import StudentNav from "./StudentNav";
import {
  User,
  Mail,
  Phone,
  Book,
  Award,
  ShieldCheck,
  Camera,
  MapPin,
  Hash,
  AlertCircle,
} from "lucide-react";
import API from "../../service/api";
import axios from "axios";

const StudentProfile = () => {
  // Mock student data - In a real app, you would fetch this from your backend
  const [studentData,setStudentData] = useState({
    name: "",
    email: "",
    phone: "676867868",
    roll: "i768",
    dept: "hjkhkj",
    semester: "1st",
    address: "Guragon",
    cgpa: "8",
    backlogs: 1, // Will trigger the red alert UI
    commRating: "i",
  });
    console.log("Hii")
    
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const token = localStorage.getItem("token");

          const res = await API.get("/auth/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const data = res.data;

          console.log("Profile Data:", data);

          setStudentData((prev) => ({
            ...prev, // keep existing fields
            name: data.name || "",
              email: data.email || "",
            roll:data._id,
            cgpa: data.cgpa || "",
            backlogs: data.backlogs || 0,
            commRating: data.communicationRating || "",
          }));
        } catch (error) {
          console.log("Profile fetch error:", error);
        }
      };

      fetchProfile();
    }, []);

  return (
    <StudentNav>
      <div className="max-w-5xl mx-auto space-y-8 font-sans">
        {/* Profile Header Card */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
          {/* Decorative Background Blob */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-full -z-0 opacity-40" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="w-32 h-32 rounded-3xl bg-indigo-600 text-white flex items-center justify-center font-black text-5xl shadow-2xl shadow-indigo-100 transition-transform hover:scale-105 cursor-default">
                {studentData.name.charAt(0)}
              </div>
              <button className="absolute -bottom-2 -right-2 p-2 bg-white rounded-xl shadow-lg border border-gray-100 text-indigo-600 hover:text-indigo-800 transition-all">
                <Camera size={18} />
              </button>
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                  {studentData.name}
                </h1>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-1 w-fit mx-auto md:mx-0">
                  <ShieldCheck size={12} /> Student Verified
                </span>
              </div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                {studentData.dept} • {studentData.semester}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                <div className="flex items-center gap-1.5 text-gray-400 text-sm font-semibold">
                  <Hash size={14} className="text-indigo-400" />{" "}
                  {studentData.roll}
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-sm font-semibold">
                  <MapPin size={14} className="text-indigo-400" />{" "}
                  {studentData.address}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Detailed Contact Info */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <h3 className="font-black text-lg text-gray-800 border-b border-gray-50 pb-4">
              Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoBlock
                label="Email Address"
                value={studentData.email}
                icon={<Mail size={16} />}
              />
              <InfoBlock
                label="Contact Number"
                value={studentData.phone}
                icon={<Phone size={16} />}
              />
              <InfoBlock
                label="Department"
                value={studentData.dept}
                icon={<Book size={16} />}
              />
              <InfoBlock
                label="Current Semester"
                value={studentData.semester}
                icon={<Award size={16} />}
              />
            </div>
          </div>

          {/* Academic Snapshot (Key Backend Metrics) */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <h3 className="font-black text-lg text-gray-800 border-b border-gray-50 pb-4">
              Academic Summary
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Current CGPA
                </p>
                <p className="text-xl font-black text-indigo-600">
                  {studentData.cgpa}
                </p>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Comm. Rating
                </p>
                <p className="text-xl font-black text-emerald-600">
                  {studentData.commRating}
                </p>
              </div>

              {/* Dynamic Backlog Alert */}
              <div
                className={`flex justify-between items-center p-4 rounded-2xl border transition-all ${
                  studentData.backlogs > 0
                    ? "bg-red-50 border-red-100 shadow-sm"
                    : "bg-green-50 border-green-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <AlertCircle
                    size={14}
                    className={
                      studentData.backlogs > 0
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  />
                  <p
                    className={`text-[10px] font-black uppercase tracking-widest ${
                      studentData.backlogs > 0
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    Backlogs
                  </p>
                </div>
                <p
                  className={`text-xl font-black ${
                    studentData.backlogs > 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {studentData.backlogs.toString().padStart(2, "0")}
                </p>
              </div>
            </div>

            <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-50">
              <p className="text-[10px] text-indigo-400 font-bold italic text-center">
                Metrics are synced with the Placement Prediction engine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StudentNav>
  );
};

// --- Reusable Sub-components ---

const InfoBlock = ({ label, value, icon }) => (
  <div className="space-y-1">
    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
      {label}
    </label>
    <div className="flex items-center gap-3 p-3.5 bg-gray-50 border border-gray-100 rounded-2xl transition-all hover:bg-white hover:shadow-sm">
      <span className="text-indigo-400">{icon}</span>
      <p className="font-bold text-gray-700 text-sm truncate">{value}</p>
    </div>
  </div>
);

export default StudentProfile;
