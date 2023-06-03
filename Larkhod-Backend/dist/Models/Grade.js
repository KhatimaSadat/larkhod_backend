"use strict";
const mongoose_1 = require("mongoose");
const gradeSchema = new mongoose_1.Schema({
    lable: { type: String, default: "" },
    grade_path: { type: String, default: "" },
    books: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Book" }],
}, { timestamps: true });
module.exports = (0, mongoose_1.model)("Grade", gradeSchema);
//# sourceMappingURL=Grade.js.map