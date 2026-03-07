import React, { useEffect, useState } from "react";
import TeacherNav from "../TeacherNav";
import API from "../../../service/api";
import { Calendar, Users, CheckCircle, XCircle } from "lucide-react";

const ViewAttendance = () => {
  const [history, setHistory] = useState([]);
  const [date, setDate] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!date) return;

    const fetchData = async () => {
      try {
        const res = await API.get(`/attendance/date?date=${date}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const attendance = res.data.attendance;

        const present = attendance.filter((a) => a.status === "Present").length;
        const absent = attendance.filter((a) => a.status === "Absent").length;
        const total = attendance.length;

        const pct = total ? ((present / total) * 100).toFixed(1) + "%" : "0%";

        const record = {
          date: new Date(date).toLocaleDateString(),
          course: attendance[0]?.course || "-",
          present,
          absent,
          pct,
        };

        setHistory([record]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [date]);

  // stats calculation
  const avgAttendance = history.length
    ? history.reduce((sum, h) => sum + parseFloat(h.pct), 0) / history.length
    : 0;

  const highestPresent = history.length
    ? Math.max(...history.map((h) => h.present))
    : 0;

  const totalAbsent = history.reduce((sum, h) => sum + h.absent, 0);

  return (
    <TeacherNav>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Attendance History
          </h1>
          <p className="text-gray-500 font-semibold">
            Review past attendance records and trends
          </p>
        </div>

        {/* Date Picker */}
        <div>
          <input
            type="date"
            className="border p-2 rounded-lg"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AttendanceStat
            icon={<Users />}
            label="Avg. Attendance"
            value={avgAttendance ? avgAttendance.toFixed(1) + "%" : "0%"}
            color="bg-blue-600"
          />

          <AttendanceStat
            icon={<CheckCircle />}
            label="Highest Present"
            value={highestPresent}
            color="bg-green-500"
          />

          <AttendanceStat
            icon={<XCircle />}
            label="Total Absentees"
            value={totalAbsent}
            color="bg-red-400"
          />
        </div>

        {/* History Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest">
                  Date
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest">
                  Course
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest text-center">
                  Present
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest text-center">
                  Absent
                </th>
                <th className="p-5 text-[11px] font-black uppercase text-gray-500 tracking-widest text-right">
                  Percentage
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {history.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 font-bold text-gray-800 flex items-center gap-2">
                    <Calendar size={14} className="text-indigo-500" />
                    {item.date}
                  </td>

                  <td className="p-5 font-semibold text-gray-600 text-sm">
                    {item.course}
                  </td>

                  <td className="p-5 text-center font-black text-green-600 text-sm">
                    {item.present}
                  </td>

                  <td className="p-5 text-center font-black text-red-400 text-sm">
                    {item.absent}
                  </td>

                  <td className="p-5 text-right">
                    <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg font-black text-xs">
                      {item.pct}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </TeacherNav>
  );
};

const AttendanceStat = ({ icon, label, value, color }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
    <div
      className={`${color} w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg`}
    >
      {icon}
    </div>

    <div>
      <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider">
        {label}
      </p>

      <p className="text-2xl font-black text-gray-800 leading-none mt-1">
        {value}
      </p>
    </div>
  </div>
);

export default ViewAttendance;
