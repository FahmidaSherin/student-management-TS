import { Router } from "express";
import {
    getAllStudents,
    getAddStudentPage,
    addStudent,
    getEditStudentPage,
    updateStudent,
    deleteStudent,
} from "../controllers/studentController";

const router = Router();
router.get("/", (_, res) => {
    res.render("index");
});

router.get("/students", getAllStudents);
router.get("/students/add", getAddStudentPage);
router.post("/students", addStudent);
router.get("/students/edit/:id", getEditStudentPage);
router.post("/students/edit/:id", updateStudent);
router.post("/students/delete/:id", deleteStudent);

export default router;
