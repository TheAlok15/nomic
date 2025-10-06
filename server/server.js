import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import { connectDB } from "./utils/db.connection.js";
import meetingRoutes from "./routes/meeting.routes.js";

const app = express();
app.use(helmet());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.json());
connectDB();

// routes
app.use("/api/v1/meeting", meetingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
