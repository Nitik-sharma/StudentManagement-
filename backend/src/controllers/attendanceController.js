
import Attendance from "../models/Attendance.js"
import User from "../models/User.js";

export const markAttendance = async (req, res) => {
  try {

    const { studentId, status, date } = req.body;

    const student = await User.findById(studentId);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    let attendance = await Attendance.findOne({
      student: studentId,
      date: date
    });

    // If attendance already exists → update it
    if (attendance) {

      attendance.status = status;

      if (status === "Present") {
        attendance.attendedClasses += 1;
      }

      attendance.totalClass += 1;

      attendance.attendancePercentage =
        (attendance.attendedClasses / attendance.totalClass) * 100;

      await attendance.save();

      return res.json({
        success: true,
        message: "Attendance updated",
        attendance
      });
    }

    // If attendance does not exist → create new
    attendance = new Attendance({
      student: studentId,
      course: student.course,
      date,
      status,
      markedBy: req.user._id
    });

    attendance.totalClass = 1;

    if (status === "Present") {
      attendance.attendedClasses = 1;
    }

    attendance.attendancePercentage =
      (attendance.attendedClasses / attendance.totalClass) * 100;

    await attendance.save();

    res.status(201).json({
      success: true,
      message: "Attendance marked successfully",
      attendance
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getAttadance = async (req, res) => {
    try {
        const attandance = await Attendance.find({ student: req.user._id }).sort({ createdAt: -1 })
        
        res.json({
            success: true,
            count: attandance.length,
            attandance
        })
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export const getAttendanceByDate = async (req, res) => {
    try {
        const { date } = req.query
        const attendance = await Attendance.find({ date })
        
        res.json({
            success: true,
            attendance

        })
    } catch (error) {
        console.log(error);
    res.status(500).json({ message: error.message });
    }
}