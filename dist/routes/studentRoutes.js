"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = require("../controllers/studentController");
const router = (0, express_1.Router)();
router.get("/students", studentController_1.getAllStudents);
router.get("/students/add", studentController_1.getAddStudentPage);
router.post("/students", studentController_1.addStudent);
router.get("/students/edit/:id", studentController_1.getEditStudentPage);
router.post("/students/edit/:id", studentController_1.updateStudent);
router.post("/students/delete/:id", studentController_1.deleteStudent);
exports.default = router;
//# sourceMappingURL=studentRoutes.js.map