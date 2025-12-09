import express from "express";
import cors from "cors";
import userRoutes from "./src/Router/userRouter.js";

const app = express();
const port = 5000;

// CORS Middleware
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

// Register routes
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
