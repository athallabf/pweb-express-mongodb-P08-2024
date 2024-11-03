import type { Request, Response } from 'express';
import BookService from '../services/book.service';

export class BookController {
  /*async addBook(req: Request, res: Response) {
    try {
      const book = await BookService.addBook(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAllBooks(req: Request, res: Response) {
    try {
      const books = await BookService.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getBookById(req: Request, res: Response) {
    try {
      const book = await BookService.getBookById(req.params.id);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }*/

  async modifyBook(req: Request, res: Response) {
    try {
      const book = await BookService.modifyBook(
        req.params.id,
        req.body
      );
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }
      res.json(book);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async removeBook(req: Request, res: Response) {
    try {
      const book = await BookService.removeBook(req.params.id);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }
      res.json({ message: 'Successfully remove book' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
