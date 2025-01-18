import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
    uniqueId: number;
    name: string;
    age: number;
    grade: string;
}

const studentSchema = new Schema<IStudent>({
    uniqueId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true },
});


export const Student = mongoose.model<IStudent & Document>('Student', studentSchema);
