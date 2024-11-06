import { BookController } from "@/controllers/book.controller";
import { AuthMiddleware } from "@/middleware/auth";
import { Router } from "express";

const router = Router();
const bookController = new BookController();

router.post("/", AuthMiddleware, bookController.addBook);
router.get("/", AuthMiddleware, bookController.getAllBooks);
router.get("/:id", AuthMiddleware, bookController.getBookById);
router.put("/:id", AuthMiddleware, bookController.modifyBook);
router.delete("/:id", AuthMiddleware, bookController.removeBook);

export default router;
