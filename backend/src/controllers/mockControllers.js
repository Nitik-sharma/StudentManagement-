import MockTest from "../models/MockTest.js";

export const addMockTest = async (req, res) => {

  try {

    const { studentId, testName, score, maxScore } = req.body;

    const percentage = (Number(score) / Number(maxScore)) * 100;

    const addMock = await MockTest.create({
      student: studentId,
      testName,
      score,
      maxScore,
      percentage,
      evaluatedBy: req.user._id
    });

    res.json({
      message: "Mock test added successfully",
      addMock
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


export const getMockTest = async (req, res) => {

  try {

    const mockTest = await MockTest
      .find({ student: req.user._id })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: mockTest.length,
      mockTest
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};