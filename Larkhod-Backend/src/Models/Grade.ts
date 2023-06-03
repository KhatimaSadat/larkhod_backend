import { Schema, model } from "mongoose";

const gradeSchema = new Schema(
  {
    lable: { type: String, default: "" },
    grade_path:{ type: String, default: "" },
    books: [{ type: Schema.Types.ObjectId, ref:"Book" }],
  },
  { timestamps: true }
);

export = model("Grade", gradeSchema);
