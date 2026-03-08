import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    assignmentName: {
      type: String,
      required: true
    },

    obtainedMarks: {
      type: Number,
      required: true
    },

    totalMarks: {
      type: Number,
      required: true
    },

    percentage: {
      type: Number,
      required: true
    },

    evaluatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Assignment", assignmentSchema);