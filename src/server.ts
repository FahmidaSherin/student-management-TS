import app from "./app";
import connectDB from "./config/db";

const PORT = 3000;

const startServer = async (): Promise<void> => {
    try {
        await connectDB(); 
        app.listen(PORT, () => {
            console.log(`Server running on    http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
}; 

startServer();
    