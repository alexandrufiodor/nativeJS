// import {StudentType} from "../02-object/02";
// import {addMoneyToBudget, addSkill, doesStudentLiveIn} from "./03";
//
//
//     let student : StudentType;
//
//     beforeEach(() => {
//         student = {
//             name: 'Alex',
//             age: 25,
//             isActivity: false,
//             address: {
//                 streetTitle: "Surganova 2",
//                 city: {
//                     title: 'Minsk',
//                     country: "Belarus"
//                 }
//             },
//             technologies: [
//                 {
//                     id: 1,
//                     title: "HTML"
//                 },
//                 {
//                     id: 2,
//                     title: 'CSS'
//                 },
//                 {
//                     id: 3,
//                     title: "React"
//                 }
//             ]
//         }
//
//     })
// test("new tech skill should be added to student", ()=> {
//     expect(student.technologies.length).toBe(3);
//
//     addSkill(student, "JS");
//
//     expect(student.technologies.length).toBe(4);
//     expect(student.technologies[3].title).toBe("JS");
//     expect(student.technologies[3].id).toBeDefined();
// });
//
// test("does student live in city?", () => {
//     let result1 = doesStudentLiveIn(student, "Moscow");
//     let result2 = doesStudentLiveIn(student, "Minsk");
//
//     expect(result1).toBe(false);
//     expect(result2).toBe(true);
// })
//
//
// test("Budget should be changed for HOSPITAL", () => {
//     addMoneyToBudget(city.governmentBuildings[0], 100000);
//
//     expect(city.governmentBuildings[0].budget).toBe(300000)
// })