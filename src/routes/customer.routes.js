import { Router } from "express";
import {
  createCustomers,
  deleteCustomer,
  getCoustomer,
  updateCustomer,
} from "../controllers/customerController.js";
const router = Router();

router.get("/", getCoustomer);
router.post("/add", createCustomers);
router.put("/update/:id", updateCustomer);
router.delete("/delete/:id", deleteCustomer);

export default router;
