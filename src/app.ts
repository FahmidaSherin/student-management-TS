import express from "express";
import bodyParser from "body-parser";
import path from "path";
import studentRoutes from "./routes/studentRoutes";

const app = express();


app.set("views", path.join(__dirname, "views"));
console.log("Views directory:", app.get("views"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(studentRoutes);

export default app;  
