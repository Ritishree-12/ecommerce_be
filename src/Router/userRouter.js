import express from "express";
import { createUser } from "../Controller/userController.js";

const router = express.Router();

router.post("/users", createUser);

export default router;
