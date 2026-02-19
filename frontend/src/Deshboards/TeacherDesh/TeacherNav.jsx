import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CheckSquare,
  FileText,
  FlaskConical,
  LineChart,
  Target,
  UserCircle,
  LogOut,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  {
    id: "dashboard",
    name: "Dashboard",
    path: "/TeacherDeshboard",
    icon: <LayoutDashboard size={18} />,
  },
  {
    id: "students",
    name: "Students",
    path: "/teacher/students",
    icon: <Users size={18} />,
  },
  {
    id: "attendance",
    name: "Attendance",
    path: "teacher/attendance",
    icon: <CheckSquare size={18} />,
    subItems: [
      { name: "Mark Attendance", path: "/attendance/mark" },
      { name: "View Attendance", path: "/attendance/view" },
    ],
  },
  {
    id: "assignments",
    name: "Assignments",
    path: "/assignments",
    icon: <FileText size={18} />,
    subItems: [
      { name: "Add Assignment Marks", path: "/assignments/add" },
      { name: "View Assignments", path: "/assignments/view" },
    ],
  },
  {
    id: "mocktests",
    name: "Mock Tests",
    path: "/mocktests",
    icon: <FlaskConical size={18} />,
    subItems: [
      { name: "Add Mock Marks", path: "/mocktests/add" },
      { name: "View Mock Tests", path: "/mocktests/view" },
    ],
  },
  {
    id: "performance",
    name: "Performance",
    path: "/performance",
    icon: <LineChart size={18} />,
  },
  {
    id: "prediction",
    name: "Placement Prediction (ML)",
    path: "/prediction",
    icon: <Target size={18} />,
  },
  {
    id: "profile",
    name: "Profile",
    path: "/profile",
    icon: <UserCircle size={18} />,
  },
];

const TeacherNav = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white font-sans antialiased">
      {/* SIDEBAR */}
      <aside className="w-72 border-r border-gray-100 flex flex-col sticky top-0 h-screen bg-white">
        <div className="p-6 text-2xl font-bold border-b border-gray-100 tracking-tight">
          Teacher Portal
        </div>

        <nav className="p-4 space-y-1 flex-1 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <div key={item.id} className="mb-1">
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  flex items-center justify-between px-4 py-3 rounded-xl font-bold text-[14px] transition-all
                  ${isActive ? "bg-[#B4C2FF] text-[#4F46E5] shadow-sm" : "text-gray-600 hover:bg-gray-50"}
                `}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                {item.subItems && (
                  <ChevronDown size={14} className="opacity-50" />
                )}
              </NavLink>

              {/* Nested Sub-menu */}
              {item.subItems && (
                <div className="ml-10 mt-1 space-y-1 border-l-2 border-gray-50">
                  {item.subItems.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      className={({ isActive }) => `
                        block py-2 px-4 text-[13px] font-semibold transition-colors 
                        ${isActive ? "text-[#4F46E5] bg-indigo-50/50 rounded-r-lg" : "text-gray-400 hover:text-gray-600"}
                      `}
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom Logout */}
        <div className="p-4 border-t border-gray-50">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 font-bold hover:bg-red-50 rounded-xl transition-all">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-50/30">
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400 font-medium">Dashboard</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 font-bold tracking-wide uppercase text-[11px]">
              Overview
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-gray-900 leading-none">
                  Prof. Harrison
                </p>
                <p className="text-[10px] font-bold text-indigo-500 uppercase mt-1">
                  Senior Faculty
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-indigo-100">
                T
              </div>
            </div>
            <button className="bg-[#FF8A8A] hover:bg-red-500 text-white px-4 py-1.5 rounded-lg text-xs font-black transition-colors uppercase tracking-wider">
              Logout
            </button>
          </div>
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default TeacherNav;
