import Assignment from "../../models/Assignment.js";
import MockTest from "../../models/MockTest.js";
import Attendance from "../../models/Attendance.js";
import User from "../../models/User.js";


export const getPerformance = async (studentId) => {

  try {

    console.log("Inside service studentId:", studentId);

    // Attendance average
    const attendance = await Attendance.find({ student: studentId });

    const attendanceAverage =
      attendance.length > 0
        ? attendance.reduce(
            (sum, a) => sum + a.attendancePercentage,
            0
          ) / attendance.length
        : 0;

    // Assignment average
    const assignment = await Assignment.find({ student: studentId });

    const assignmentAverage =
      assignment.length > 0
        ? assignment.reduce(
            (sum, a) => sum + a.percentage,
            0
          ) / assignment.length
        : 0;

    // Mock test average
    const mock = await MockTest.find({ student: studentId });

    const mockAverage =
      mock.length > 0
        ? mock.reduce(
            (sum, a) => sum + a.percentage,
            0
          ) / mock.length
        : 0;

    // Student academic info
    const student = await User.findById(studentId);

    if (!student) {
      return null;
    }

    // RETURN performance object
    return {
      attendancePercentage: attendanceAverage,
      assignmentAverage: assignmentAverage,
      mockAverage: mockAverage,
      cgpa: student.cgpa,
      aptitudeScore: student.aptitudeScore,
      communicationRating: student.communicationRating,
      backlogs: student.backlogs
    };

  } catch (error) {

    console.log("Service error:", error);
    return null;

  }
};