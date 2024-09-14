import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

// USER ROUTES

router.post("/create_user", new CreateUserController().handle);

export default router;
