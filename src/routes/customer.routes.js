import { Router } from "express";
import {
  register,
  deleteUser,
  getUser,
  updateUser,
  login,
} from "../controllers/customerController.js";
const router = Router();

router.get("/", getUser);
router.post("/register", register);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.post("/login", login);

export default router;
