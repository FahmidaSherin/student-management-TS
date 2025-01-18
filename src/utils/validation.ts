
export const validateStudentData = (name: string, age: number, grade: string): string[] => {
    const errors: string[] = [];

    if (!name || name.startsWith(" ") || name.endsWith(" ")) {
        errors.push("Name cannot have leading or trailing spaces.");
    }

    if (!age || typeof age !== "number" || age <= 0 || age > 50) {
        errors.push("Age must be a positive number and lesthan 50.");
    }

    if (!grade || typeof grade !== "string" || grade.trim() === "" || !/^[A-E]$/.test(grade)) {
        errors.push("Grade must be a single uppercase letter (A-E).");
    }

    return errors
};