import React from 'react'
import AdminNavbar from './AdminNavbar';

function Courses() {
  const courseList = [
    { name: "Computer Science", code: "CS", instructor: "Dr. Rajesh Kumar", students: 45, duration: "4 Years", fees: "2,50,000" },
    { name: "Information Technology", code: "IT", instructor: "Prof. Sunita Sharma", students: 38, duration: "4 Years", fees: "2,30,000" },
    { name: "Electronics Engineering", code: "EC", instructor: "Dr. Amit Verma", students: 32, duration: "4 Years", fees: "2,40,000" },
    { name: "Mechanical Engineering", code: "ME", instructor: "Prof. Ravi Gupta", students: 28, duration: "4 Years", fees: "2,20,000" },
  ];

  return (
    <AdminNavbar>
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Courses</h1>
            <p className="text-gray-500 font-medium">
              Manage courses information
            </p>
          </div>
          <button className="bg-[#4F46E5] text-white px-6 py-2 rounded-lg font-bold">
            Add Course
          </button>
        </div>

        <div className="bg-white rounded-xl border-2 border-blue-400 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-4 text-xs font-black uppercase text-gray-600">
                  Course Name
                </th>
                <th className="p-4 text-xs font-black uppercase text-gray-600">
                  Code
                </th>
                <th className="p-4 text-xs font-black uppercase text-gray-600">
                  Instructor
                </th>
                <th className="p-4 text-xs font-black uppercase text-gray-600 text-center">
                  Students
                </th>
                <th className="p-4 text-xs font-black uppercase text-gray-600">
                  Duration
                </th>
                <th className="p-4 text-xs font-black uppercase text-gray-600">
                  Fees
                </th>
              </tr>
            </thead>
            <tbody>
              {courseList.map((course, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                >
                  <td className="p-4 text-sm font-bold">{course.name}</td>
                  <td className="p-4 text-sm font-medium">{course.code}</td>
                  <td className="p-4 text-sm font-medium">
                    {course.instructor}
                  </td>
                  <td className="p-4 text-sm font-medium text-center">
                    {course.students}
                  </td>
                  <td className="p-4 text-sm font-medium">{course.duration}</td>
                  <td className="p-4 text-sm font-bold text-gray-700">
                    {course.fees}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminNavbar>
  );
}

export default Courses