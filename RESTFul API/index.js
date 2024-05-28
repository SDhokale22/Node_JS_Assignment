import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import cors from "cors";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/task", taskRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

