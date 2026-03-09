import React, { useState, useEffect } from "react";
import TeacherNav from "../TeacherNav";
import API from "../../../service/api";
import { useNavigate } from "react-router-dom";

const AddAssignments = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    assignmentName: "",
    obtainedMarks: "",
    totalMarks: "",
  });
  const [students,setStudents]=useState([])
  const [percentage, setPercentage] = useState(0);
  const navigate=useNavigate()

const token=localStorage.getItem("token")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/admin/students", {
          headers: {
            Authorization:`Bearer ${token}`
          }
        });
        
       const resStudent = res.data.students;
        setStudents(resStudent)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData()
  }, [])
  
  console.log(students)

  // Logic: System calculates percentage automatically
  useEffect(() => {
    if (
      formData.obtainedMarks &&
      formData.totalMarks &&
      formData.totalMarks > 0
    ) {
      const pct = (formData.obtainedMarks / formData.totalMarks) * 100;
      setPercentage(pct.toFixed(1));
    } else {
      setPercentage(0);
    }
  }, [formData.obtainedMarks, formData.totalMarks]);


  const handleSubmit = async (e) => {
    e.preventDefault()
   try {
     await API.post("/addAssignment/add", formData, {
       headers: {
         Authorization:`Bearer ${token}`
       }
     });

     alert("Marks add sucessfully")
     navigate("/assignments/view");
     
   } catch (error) {
    console.log(error.message)
   }
  }

  return (
    <TeacherNav>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Add Assignment Marks
          </h1>
          <p className="text-gray-500 font-semibold">
            Record student scores for class assignments
          </p>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-6">
            {/* Student Dropdown */}
            <div>
              <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">
                Select Student
              </label>
              <select
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-gray-700 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                onChange={(e) =>
                  setFormData({ ...formData, studentId: e.target.value })
                }
              >
                <option value="">Choose a student...</option>
                {students.map((data) => {
                  return (
                    <option key={data._id} value={data._id}>
                      {data.name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Assignment Name */}
            <div>
              <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">
                Assignment Name
              </label>
              <input
                type="text"
                placeholder="e.g. Data Structures - Lab 1"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold"
                onChange={(e) =>
                  setFormData({ ...formData, assignmentName: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Marks Obtained */}
              <div>
                <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">
                  Marks Obtained
                </label>
                <input
                  type="number"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold"
                  onChange={(e) =>
                    setFormData({ ...formData, obtainedMarks: e.target.value })
                  }
                />
              </div>
              {/* Total Marks */}
              <div>
                <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">
                  Total Marks
                </label>
                <input
                  type="number"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold"
                  onChange={(e) =>
                    setFormData({ ...formData, totalMarks: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Auto-calculated Result */}
            <div className="p-6 bg-indigo-50 rounded-3xl flex justify-between items-center border border-indigo-100">
              <div>
                <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-1">
                  Calculation Result
                </p>
                <p className="text-indigo-900 font-bold">Percentage Achieved</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-black text-indigo-600">
                  {percentage}%
                </span>
              </div>
            </div>

            <button type="submit" className="w-full py-5 bg-[#4F46E5] text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all transform active:scale-[0.98]">
              Submit Marks
            </button>
          </div>
        </form>
      </div>
    </TeacherNav>
  );
};

export default AddAssignments;
