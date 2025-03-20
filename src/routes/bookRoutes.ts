import express from "express";
import upload from "../middlewares/upload";
import { addBook, getBooks } from "../controllers/bookController";

const router = express.Router();

router.post("/", upload.single("coverImage"), addBook);
router.get("/", getBooks);

export default router;
