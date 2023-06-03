"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllData = exports.insertData = void 0;
const Grade_1 = __importDefault(require("../Models/Grade"));
const Book_1 = __importDefault(require("../Models/Book"));
const schoolSubjects_1 = require("./schoolSubjects");
const insertData = () => __awaiter(void 0, void 0, void 0, function* () {
    // dari
    for (const grade of schoolSubjects_1.allData.dari_curriculum.primary.grades) {
        const subjectIds = [];
        for (const subject of grade.subjects) {
            const book = yield Book_1.default.create(subject);
            subjectIds.push(book._id);
        }
        yield Grade_1.default.create({
            grade_path: grade.grade_path,
            label: grade.label,
            books: subjectIds,
        });
    }
    console.log("primary school data added.");
    for (const grade of schoolSubjects_1.allData.dari_curriculum.secondary.grades) {
        const subjectIds = [];
        for (const subject of grade.subjects) {
            const book = yield Book_1.default.create(subject);
            subjectIds.push(book._id);
        }
        yield Grade_1.default.create({
            grade_path: grade.grade_path,
            label: grade.label,
            books: subjectIds,
        });
    }
    console.log("secondary school data added.");
    for (const grade of schoolSubjects_1.allData.dari_curriculum.high_school.grades) {
        const subjectIds = [];
        for (const subject of grade.subjects) {
            const book = yield Book_1.default.create(subject);
            subjectIds.push(book._id);
        }
        yield Grade_1.default.create({
            grade_path: grade.grade_path,
            label: grade.label,
            books: subjectIds,
        });
    }
    console.log("high school data added.");
    // pashto
    for (const grade of schoolSubjects_1.allData.pashto_curriculum.primary.grades) {
        const subjectIds = [];
        for (const subject of grade.subjects) {
            const book = yield Book_1.default.create(subject);
            subjectIds.push(book._id);
        }
        yield Grade_1.default.create({
            grade_path: grade.grade_path,
            label: grade.label,
            books: subjectIds,
        });
    }
    console.log("primary school data added.");
    for (const grade of schoolSubjects_1.allData.pashto_curriculum.secondary.grades) {
        const subjectIds = [];
        for (const subject of grade.subjects) {
            const book = yield Book_1.default.create(subject);
            subjectIds.push(book._id);
        }
        yield Grade_1.default.create({
            grade_path: grade.grade_path,
            label: grade.label,
            books: subjectIds,
        });
    }
    console.log("secondary school data added.");
    for (const grade of schoolSubjects_1.allData.pashto_curriculum.high_school.grades) {
        const subjectIds = [];
        for (const subject of grade.subjects) {
            const book = yield Book_1.default.create(subject);
            console.log("subject ", subject.label);
            subjectIds.push(book._id);
        }
        yield Grade_1.default.create({
            grade_path: grade.grade_path,
            label: grade.label,
            books: subjectIds,
        });
    }
    console.log("high school data added.");
});
exports.insertData = insertData;
const removeAllData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Grade_1.default.deleteMany();
    yield Book_1.default.deleteMany();
    console.log("school data deleted.");
});
exports.removeAllData = removeAllData;
//# sourceMappingURL=index.js.map