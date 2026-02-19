import React, { useState } from "react";
import TeacherNav from "./TeacherNav";
import {
  User,
  Mail,
  Phone,
  Book,
  Award,
  Save,
  Camera,
  ShieldCheck,
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <TeacherNav>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Profile Header Card */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-0 opacity-50" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="w-32 h-32 rounded-3xl bg-indigo-600 text-white flex items-center justify-center font-black text-5xl shadow-2xl shadow-indigo-200 transition-transform group-hover:scale-105">
                T
              </div>
              <button className="absolute -bottom-2 -right-2 p-2 bg-white rounded-xl shadow-lg border border-gray-100 text-indigo-600 hover:text-indigo-800 transition-colors">
                <Camera size={18} />
              </button>
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                  Prof. Harrison
                </h1>
                <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-1 w-fit mx-auto md:mx-0">
                  <ShieldCheck size={12} /> Verified Faculty
                </span>
              </div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                Senior Faculty • Dept. of Computer Science
              </p>
              <p className="text-indigo-500 font-semibold mt-2 text-sm">
                Joined: August 2021
              </p>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-6 py-3 rounded-2xl font-black text-sm transition-all shadow-lg ${
                isEditing
                  ? "bg-gray-100 text-gray-600"
                  : "bg-indigo-600 text-white shadow-indigo-100 hover:bg-indigo-700"
              }`}
            >
              {isEditing ? "Cancel Edit" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Profile Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <h3 className="font-black text-lg text-gray-800 border-b border-gray-50 pb-4">
                Personal Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProfileInput
                  label="Full Name"
                  value="Harrison Ford"
                  icon={<User size={16} />}
                  disabled={!isEditing}
                />
                <ProfileInput
                  label="Email Address"
                  value="harrison.f@university.edu"
                  icon={<Mail size={16} />}
                  disabled={!isEditing}
                />
                <ProfileInput
                  label="Phone Number"
                  value="+91-9876543210"
                  icon={<Phone size={16} />}
                  disabled={!isEditing}
                />
                <ProfileInput
                  label="Employee ID"
                  value="EMP-FAC-2021-09"
                  icon={<Award size={16} />}
                  disabled={true}
                />
              </div>

              {isEditing && (
                <button className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-xl font-black text-sm shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">
                  <Save size={18} /> Save Changes
                </button>
              )}
            </div>
          </div>

          {/* Academic/Professional Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <h3 className="font-black text-lg text-gray-800 border-b border-gray-50 pb-4">
                Academic Focus
              </h3>

              <div className="space-y-4">
                <AcademicBadge
                  icon={<Book />}
                  label="Primary Course"
                  value="Data Structures"
                />
                <AcademicBadge
                  icon={<Book />}
                  label="Secondary Course"
                  value="AI & ML"
                />
                <AcademicBadge
                  icon={<Award />}
                  label="Specialization"
                  value="Database Systems"
                />
              </div>

              <div className="pt-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                  Teaching Statistics
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-2xl text-center">
                    <p className="text-xl font-black text-gray-800">120+</p>
                    <p className="text-[9px] font-bold text-gray-500 uppercase">
                      Students
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-2xl text-center">
                    <p className="text-xl font-black text-gray-800">4.8</p>
                    <p className="text-[9px] font-bold text-gray-500 uppercase">
                      Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TeacherNav>
  );
};

// --- Sub-Components ---

const ProfileInput = ({ label, value, icon, disabled }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
      {label}
    </label>
    <div
      className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all ${
        disabled
          ? "bg-gray-50 border-gray-100"
          : "bg-white border-indigo-200 ring-2 ring-indigo-50"
      }`}
    >
      <span className="text-indigo-400">{icon}</span>
      <input
        type="text"
        defaultValue={value}
        disabled={disabled}
        className="bg-transparent border-none p-0 w-full font-bold text-gray-700 text-sm focus:ring-0"
      />
    </div>
  </div>
);

const AcademicBadge = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center transition-colors group-hover:bg-indigo-600 group-hover:text-white">
      {icon}
    </div>
    <div>
      <p className="text-gray-400 text-[9px] font-black uppercase tracking-wider leading-none mb-1">
        {label}
      </p>
      <p className="text-sm font-bold text-gray-700">{value}</p>
    </div>
  </div>
);

export default Profile;
