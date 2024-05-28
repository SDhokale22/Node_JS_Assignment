import express from "express"
import { createTask, deleteTask, getAllTask, getSingleTask, updateTask } from "../controller/taskController.js";

const router = express.Router();

router.route("/create").post(createTask);
router.route("/update/:id").put(updateTask);
router.route("/delete/:id").delete(deleteTask);
router.route("/singleTask/:id").get(getSingleTask);
router.route("/allTask").get(getAllTask);

export default router;