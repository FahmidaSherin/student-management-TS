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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.getEditStudentPage = exports.addStudent = exports.getAddStudentPage = exports.getAllStudents = void 0;
const studentService_1 = require("../services/studentService");
const studentService = new studentService_1.StudentService();
const getAllStudents = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield studentService.getAllStudents();
        res.render("students", { students });
    }
    catch (error) {
        res.status(500).send("Error fetching students.");
    }
});
exports.getAllStudents = getAllStudents;
const getAddStudentPage = (_, res) => {
    res.render("addStudent");
};
exports.getAddStudentPage = getAddStudentPage;
const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield studentService.createStudent(req.body);
        res.redirect("/students");
    }
    catch (error) {
        res.status(500).send("Error adding student.");
    }
});
exports.addStudent = addStudent;
const getEditStudentPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield studentService.getStudentById(req.params.id);
        res.render("editStudent", { student });
    }
    catch (error) {
        res.status(500).send("Error fetching student.");
    }
});
exports.getEditStudentPage = getEditStudentPage;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield studentService.updateStudent(req.params.id, req.body);
        res.redirect("/students");
    }
    catch (error) {
        res.status(500).send("Error updating student.");
    }
});
exports.updateStudent = updateStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield studentService.deleteStudent(req.params.id);
        res.redirect("/students");
    }
    catch (error) {
        res.status(500).send("Error deleting student.");
    }
});
exports.deleteStudent = deleteStudent;
//# sourceMappingURL=studentController.js.map