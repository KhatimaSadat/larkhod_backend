import { Schema, model } from "mongoose";
const lessonSchema = new Schema(
  {
    label: { type: String, default: "" },
    paths: [{ type: String, default: "" }],
    


  
  },
  { _id: false }
);
const partSchema = new Schema(
  {
    label: { type: String, default: "" },
    paths: [{ type: String, default: "" }],
    lessons: [lessonSchema],
  },
  { _id: false }
);

const bookSchema = new Schema(
  {
    label: { type: String, default: "" },
    subject_path: { type: String, default: "" },
    download_pdf: { type: String, default: "" },
    parts: [partSchema],
  },
  { timestamps: true }
);


export = model("Book", bookSchema);
