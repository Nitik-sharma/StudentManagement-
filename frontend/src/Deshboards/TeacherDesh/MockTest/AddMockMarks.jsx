import React, { useEffect, useState } from "react";
import TeacherNav from '../TeacherNav'
import API from "../../../service/api";
import { useNavigate } from "react-router-dom";

const AddMockMarks = () => {
  const [students,setStudents]=useState([])
  const [formData, setFormData] = useState({
    studentId: "",
    testName: "",
    score: "",
    maxScore:"",
  });
  const token = localStorage.getItem("token")
  
  const navigate=useNavigate()

  useEffect(() => {
    const fetchStudent =async () => {
      try {
        const res = await API.get("/admin/students", {
          headers: {
            Authorization:`Bearer ${token}`
          }
        });

        // console.log(res.data.students);
        const student = res.data.students;
        setStudents(student)


      } catch (error) {
        console.log(error.message)
      }
    }

    fetchStudent()
  },[])

  const handleSubmit =async (e) => {
    e.preventDefault()
    console.log(formData)

    try {
      await API.post("/MockTest/add", formData, {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })

      alert("Marks Added sucessfully")

      navigate("/mocktests/view");

    } catch (error) {
      console.log(error.message)
    }
  }

  console.log(students)

  return (
    <TeacherNav>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Add Mock Marks
          </h1>
          <p className="text-gray-500 font-semibold text-sans">
            Enter student scores for conducted mock tests
          </p>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-6">
            {/* Student Selection */}
            <div>
              <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">
                Student
              </label>
              <select
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-gray-700 outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
                onChange={(e) =>
                  setFormData({ ...formData, studentId: e.target.value })
                }
              >
                <option value="">Select Student...</option>
               
                {
                  students.map((data) => {
                    return <option key={data._id} value={data._id}>{data.name}</option>;
                  })
                }
              </select>
            </div>

            {/* Mock Test Name */}
            <div>
              <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">
                Mock Test Name
              </label>
              <input
                type="text"
                placeholder="e.g. Full Length Mock - 01"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                onChange={(e) =>
                  setFormData({ ...formData, testName: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Score */}
              <div>
                <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">
                  Score Obtained
                </label>
                <input
                  type="number"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold"
                  onChange={(e) =>
                    setFormData({ ...formData, score: e.target.value })
                  }
                />
              </div>
              {/* Total */}
              <div>
                <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">
                  Total Marks
                </label>
                <input
                  type="number"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold"
                  onChange={(e) =>
                    setFormData({ ...formData, maxScore: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-[#4F46E5] text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all transform active:scale-[0.98]"
            >
              Submit Mock Score
            </button>

           
          </div>
        </form>
      </div>
    </TeacherNav>
  );
};

export default AddMockMarks;
