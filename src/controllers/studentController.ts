import { Request, Response } from "express";
import { StudentService } from "../services/studentService";
import { IStudent } from "../models/StudentModel";
import { validateStudentData } from "../utils/validation";


const studentService = new StudentService();

export const getAllStudents = async (_: Request, res: Response): Promise<void> => {
    try {
        const students = await studentService.getAllStudents();
        res.render("students", { students });
    } catch (error) {
        res.status(500).send("Error fetching students.");
    }
};

export const getAddStudentPage = (_: Request, res: Response): void => {
    res.render("addStudent", { error: null, input: {} });
};

export const addStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log('req.body', req.body);
        const { name, age, grade } = req.body;
        const validationError = validateStudentData(name, Number(age), grade);

        if (validationError && validationError.length > 0) {
            res.status(400).render("addStudent", { error: validationError, input: req.body });
            return;
        }

        await studentService.createStudent({
            name,
            age: Number(age),
            grade,
        } as Omit<IStudent, "uniqueId" | "_id">);

        res.redirect("/students");
    } catch (error) {
        res.status(500).render("addStudent", { error: ["An unknown error occurred."], input: req.body });
    }
};


export const getEditStudentPage = async (req: Request, res: Response): Promise<void> => {
    try {
        const student = await studentService.getStudentById(req.params.id);
        res.render("editStudent", {
            student,
            error: null,
        });
    } catch (error) {
        res.status(500).send("Error fetching student.");
    }
};

export const updateStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, age, grade } = req.body;

        const errorMessage = validateStudentData(name, Number(age), grade);
        if (errorMessage && errorMessage.length > 0) {
            const student = { _id: req.params.id, name, age, grade };
            res.status(400).render("editStudent", { error: errorMessage, student });
            return;
        }

        await studentService.updateStudent(req.params.id, {
            name,
            age: Number(age),
            grade,
        });

        res.redirect("/students");
    } catch (error) {
        res.status(500).send("Error updating student.");
    }
};

export const deleteStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        await studentService.deleteStudent(req.params.id);
        res.redirect("/students");
    } catch (error) {
        res.status(500).send("Error deleting student.");
    }
};
