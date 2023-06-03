"use strict";
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    image: { type: String, default: "" },
    phone: { type: String, default: "" },
    password: { type: String, default: "" },
    role: {
        type: String,
        enum: ["admin", "student"],
        default: "student",
    },
}, { timestamps: true });
module.exports = (0, mongoose_1.model)("User", userSchema);
//# sourceMappingURL=User.js.map