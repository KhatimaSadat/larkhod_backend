


import Grade from "../Models/Grade";
import Book from "../Models/Book";


import { allData } from "./schoolSubjects";



const insertData = async () => {
 // dari
 for (const grade of allData.dari_curriculum.primary.grades) {
   const subjectIds :any[] = [];


   for (const subject of grade.subjects) {
     const book = await Book.create(subject);
     subjectIds.push(book._id);
   }


   await Grade.create({
     grade_path: grade.grade_path,
     label: grade.label,
     books: subjectIds,
   });

 }
 console.log("primary school data added.")


 for (const grade of allData.dari_curriculum.secondary.grades) {
  const subjectIds :any[] = [];


   for (const subject of grade.subjects) {
     const book = await Book.create(subject);
     subjectIds.push(book._id);
   }


   await Grade.create({
     grade_path: grade.grade_path,
     label: grade.label,
     books: subjectIds,
   });
 }
 console.log("secondary school data added.")


 for (const grade of allData.dari_curriculum.high_school.grades) {
  const subjectIds :any[] = [];


   for (const subject of grade.subjects) {
     const book = await Book.create(subject);
     subjectIds.push(book._id);
   }


   await Grade.create({
     grade_path: grade.grade_path,
     label: grade.label,
     books: subjectIds,
   });
 }
 console.log("high school data added.")


 // pashto
 for (const grade of allData.pashto_curriculum.primary.grades) {
  const subjectIds :any[] = [];


   for (const subject of grade.subjects) {
     const book = await Book.create(subject);
     subjectIds.push(book._id);
   }


   await Grade.create({
     grade_path: grade.grade_path,
     label: grade.label,
     books: subjectIds,
   });
 }
 console.log("primary school data added.")


 for (const grade of allData.pashto_curriculum.secondary.grades) {
  const subjectIds :any[] = [];

   for (const subject of grade.subjects) {
     const book = await Book.create(subject);
     subjectIds.push(book._id);
   }


   await Grade.create({
     grade_path: grade.grade_path,
     label: grade.label,
     books: subjectIds,
   });
 }
 console.log("secondary school data added.")


 for (const grade of allData.pashto_curriculum.high_school.grades) {
  const subjectIds :any[] = [];


   for (const subject of grade.subjects) {
     const book = await Book.create(subject);
     console.log("subject ",subject.label)
     subjectIds.push(book._id);
   }



   await Grade.create({
     grade_path: grade.grade_path,
     label: grade.label,
     books: subjectIds,
   });
 }
 console.log("high school data added.")
};



const removeAllData = async () => {
 await Grade.deleteMany();
 await Book.deleteMany();
 console.log("school data deleted.")
};



export { insertData, removeAllData };
