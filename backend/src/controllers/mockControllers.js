import MockTest from "../models/MockTest.js";

export const addMockTest = async (req, res) => {

  try {

    const { studentId, testName, score, maxScore } = req.body;


    const percentage = ((score / maxScore) * 100).toFixed(2);
    const existing = await MockTest.findOne({
  student: studentId,
  testName: testName
});

if (existing) {
  return res.status(400).json({
    message: "Marks already added for this test"
  });
}

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

    const mockTest = await MockTest.find().populate("student", "name course rollNo").sort({ createdAt: -1 })
    

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