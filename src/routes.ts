import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserControler } from "./controllers/AuthenticateUserControler";
import {CreateComplimentsController} from "./controllers/CreateComplimentsControler"

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserControler = new AuthenticateUserControler();
const createComplimentsController = new CreateComplimentsController();

router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserControler.handle);
router.post("compliments", createComplimentsController.handle);

export { router };
