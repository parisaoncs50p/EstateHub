
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// تست
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "EstateHub Backend API is Running 🚀",
  });
});

export default app;