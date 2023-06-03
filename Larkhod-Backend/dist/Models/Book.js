"use strict";
const mongoose_1 = require("mongoose");
const lessonSchema = new mongoose_1.Schema({
    label: { type: String, default: "" },
    paths: [{ type: String, default: "" }],
}, { _id: false });
const partSchema = new mongoose_1.Schema({
    label: { type: String, default: "" },
    paths: [{ type: String, default: "" }],
    lessons: [lessonSchema],
}, { _id: false });
const bookSchema = new mongoose_1.Schema({
    label: { type: String, default: "" },
    subject_path: { type: String, default: "" },
    download_pdf: { type: String, default: "" },
    parts: [partSchema],
}, { timestamps: true });
module.exports = (0, mongoose_1.model)("Book", bookSchema);
//# sourceMappingURL=Book.js.map