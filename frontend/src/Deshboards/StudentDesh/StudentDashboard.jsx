import React, { useEffect, useState } from "react";
import StudentNav from "./StudentNav";
import { CheckCircle, Award, Clock, TrendingUp } from "lucide-react";
import API from "../../service/api";
import axios from "axios";

const StudentDashboard = () => {
  const [profile, setProfile] = useState({})
  const [attandance,setAttandance]=useState({})
  const [performance, setPerformance] = useState({})
  const [assignments, setAssignments] = useState([])
  
  useEffect(() => {
    
    const fetchData = async () => {

      try {
        const token = localStorage.getItem("token");
        console.log(token)


        // access user profile 
      const profileRes = await API.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        const data = profileRes.data
        setProfile(data)

        // get user attandance

        const getAttandance = await API.get("/attandance/getAttandance", {
          headers: {
            Authorization:`Bearer ${token}`
          }
        });

        

      
        setAttandance(getAttandance.data.attandance[0]);

        // fetch performance data

        const getPerformance = await API.get(
          `/performance/${profile._id}`, {
            headers: {
              Authorization:`Bearer ${token}`
            }
          }
        );

        console.log(getPerformance)
        
       
      } catch (error) {
        
      }
    }

    fetchData()
  },[])

console.log(profile._id)


  return (
    <StudentNav>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-gray-900">
            Welcome back, {profile.name}
          </h1>
          <p className="text-gray-500 font-semibold mt-1">
            Here is what's happening with your studies today.
          </p>
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard
            label="Attendance"
            value={attandance.attendancePercentage}
            sub="Above Average"
            icon={<Clock />}
            color="text-blue-600 bg-blue-50"
          />
          <SummaryCard
            label="Attended Class"
            value={attandance.attendedClasses}
            sub="Above Average"
            icon={<Clock />}
            color="text-blue-600 bg-blue-50"
          />
          <SummaryCard
            label="Total class "
            value={attandance.totalClass}
            sub="Above Average"
            icon={<Clock />}
            color="text-blue-600 bg-blue-50"
          />
          <SummaryCard
            label="Current CGPA"
            value="8.42"
            sub="+0.2 from last sem"
            icon={<Award />}
            color="text-indigo-600 bg-indigo-50"
          />
          <SummaryCard
            label="Pending Tasks"
            value="03"
            sub="Assignments due"
            icon={<CheckCircle />}
            color="text-orange-500 bg-orange-50"
          />
          <SummaryCard
            label="Placement Chance"
            value="92%"
            sub="High Probability"
            icon={<TrendingUp />}
            color="text-emerald-600 bg-emerald-50"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Schedule/Deadlines */}
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="font-black text-lg mb-6">Upcoming Deadlines</h3>
            <div className="space-y-4">
              <DeadlineItem
                title="Data Structures Assignment"
                date="Feb 22"
                type="Assignment"
                color="border-l-orange-400"
              />
              <DeadlineItem
                title="ML Mock Interview"
                date="Feb 25"
                type="Mock Test"
                color="border-l-purple-400"
              />
              <DeadlineItem
                title="Project Phase 1"
                date="March 01"
                type="Project"
                color="border-l-indigo-400"
              />
            </div>
          </div>

          {/* Performance Mini Chart Placeholder */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
            <h3 className="font-black text-sm text-gray-400 uppercase tracking-widest mb-6 text-center">
              Semester Progress
            </h3>
            <div className="w-32 h-32 rounded-full border-[10px] border-indigo-500 border-t-gray-100 flex items-center justify-center relative">
              <span className="text-2xl font-black text-gray-800">75%</span>
            </div>
            <p className="mt-6 text-xs font-bold text-gray-500 text-center px-4">
              You have completed 75% of your semester syllabus.
            </p>
          </div>
        </div>
      </div>
    </StudentNav>
  );
};

const SummaryCard = ({ label, value, sub, icon, color }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-50 shadow-sm">
    <div
      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}
    >
      {icon}
    </div>
    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
      {label}
    </p>
    <p className="text-2xl font-black text-gray-900 mt-1">{value}</p>
    <p className="text-[11px] text-gray-500 font-bold mt-1">{sub}</p>
  </div>
);

const DeadlineItem = ({ title, date, type, color }) => (
  <div
    className={`flex items-center justify-between p-4 bg-gray-50 rounded-2xl border-l-4 ${color}`}
  >
    <div>
      <p className="font-black text-sm text-gray-800">{title}</p>
      <p className="text-[10px] text-gray-400 font-bold uppercase">{type}</p>
    </div>
    <div className="text-right">
      <p className="font-black text-indigo-600 text-sm">{date}</p>
      <p className="text-[9px] font-bold text-gray-400 uppercase">Due Date</p>
    </div>
  </div>
);

export default StudentDashboard;
