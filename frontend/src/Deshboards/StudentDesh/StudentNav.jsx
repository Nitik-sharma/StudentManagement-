import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, LineChart, UserCircle, LogOut } from "lucide-react";

const studentMenuItems = [
    {
         id: 'dashboard', name: 'Dashboard', path: '/student/dashboard', icon: <LayoutDashboard size={20} /> ,
    },
  {
    id: "performance",
    name: "Performance Metrics", // Focused on the cards and tables we just built
    path: "/student/performance",
    icon: <LineChart size={18} />,
  },
  {
    id: "profile",
    name: "My Profile",
    path: "/student/profile",
    icon: <UserCircle size={18} />,
  },
  
];

const StudentNav = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white font-sans antialiased">
      <aside className="w-64 border-r border-gray-100 flex flex-col sticky top-0 h-screen bg-white">
        <div className="p-6 text-2xl font-bold border-b border-gray-100 text-indigo-600">
          StudentHub
        </div>
        <nav className="p-4 space-y-1 flex-1">
          {studentMenuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-[14px] transition-all
                ${isActive ? "bg-indigo-50 text-indigo-600 shadow-sm" : "text-gray-500 hover:bg-gray-50"}
              `}
            >
              {item.icon} <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-50">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 font-bold hover:bg-red-50 rounded-xl transition-all">
            <LogOut size={18} /> <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col bg-gray-50/30">
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-20">
          <h2 className="text-xl font-bold text-gray-800">
            Academic Session 2026
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-black text-gray-900 leading-none">
                Rahul Sharma
              </p>
              <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase">
                CS001 • Sem 6
              </p>
            </div>
            <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              R
            </div>
          </div>
        </header>
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default StudentNav;
