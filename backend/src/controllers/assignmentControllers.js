import Assignment from "../models/Assignment.js";

export const addAssignment = async (req, res) => {
  try {

    const { studentId, assignmentName, obtainedMarks, totalMarks } = req.body;

    const percentage =
      (Number(obtainedMarks) / Number(totalMarks)) * 100;

    const assignment = await Assignment.create({
      student: studentId,
      assignmentName,
      obtainedMarks,
      totalMarks,
      percentage,
      evaluatedBy: req.user._id
    });

    res.json({
      success: true,
      message: "Assignment marks added",
      assignment
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


export const getAssignments = async (req, res) => {
  try {

    const assignments = await Assignment.find()
      .populate("student", "name rollNo")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: assignments.length,
      assignments
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};