import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  CheckSquare,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminNavbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      active: true,
      path: "/admiDeshboard",
    },
    {
      name: "Students",
      icon: <Users size={20} />,
      path: "/students",
    },
    { name: "Courses", icon: <BookOpen size={20} />, path: "/courses" },
    {
      name: "Attendence",
      icon: <CheckSquare size={20} />,
      path: "/attendance",
    },
    { name: "Marks", icon: <FileText size={20} />, path: "/marks" },
  ];

  return (
    <div className="flex min-h-screen bg-white font-sans antialiased">
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="p-6 text-2xl font-bold border-b border-gray-100 flex justify-between items-center">
          <span>Menu</span>
          <button className="lg:hidden" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer font-bold text-[15px] transition-all ${
                item.active
                  ? "bg-[#B4C2FF] text-[#4F46E5] shadow-sm"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              
                <span
                  className={item.active ? "text-[#4F46E5]" : "text-gray-400"}
                >
                  {item.icon}
                </span>
                {item.name}
             
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg lg:text-xl font-bold text-gray-800 truncate">
              Student Management System
            </h2>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-xs">
                A
              </div>
              <span className="hidden sm:inline text-sm font-semibold text-gray-600">
                Admin
              </span>
            </div>
            <button className="bg-[#FF8A8A] hover:bg-red-500 text-white px-3 lg:px-5 py-1.5 rounded-lg text-sm font-bold transition-colors">
              Logout
            </button>
          </div>
        </header>

        <main className="p-4 lg:p-8 bg-gray-50/50 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default AdminNavbar;
