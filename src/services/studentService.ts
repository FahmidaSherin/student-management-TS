import mongoose from "mongoose";
import { Student, IStudent } from "../models/StudentModel";



export class StudentService {
    async getAllStudents(): Promise<IStudent[]> {
        return await Student.find();
    }

    async getStudentById(id: string): Promise<IStudent | null> {
        return await Student.findById(id);
    }

    async createStudent(data: Omit<IStudent, "_id" | "uniqueId">): Promise<Partial<IStudent>> {
        try {
            const lastStudent = await Student.findOne().sort({ uniqueId: -1 });
            const newUniqueId = lastStudent ? lastStudent.uniqueId + 1 : 1;

            const studentData = { ...data, uniqueId: newUniqueId };
            const createdStudent = await Student.create(studentData);

            return {
                uniqueId: createdStudent.uniqueId,
                name: createdStudent.name,
                age: createdStudent.age,
                grade: createdStudent.grade,
            };
        } catch (error) {
            if (error instanceof mongoose.Error.ValidationError) {
                throw new Error(`Validation Error: ${error}`);
            }
            throw error;
        }
    }



    async updateStudent(id: string, data: Partial<IStudent>): Promise<IStudent | null> {
        return await Student.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteStudent(id: string): Promise<IStudent | null> {
        return await Student.findByIdAndDelete(id);
    }
}
