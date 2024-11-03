import type { IBook } from '../models/book.model';
import Book from '../models/book.model';

export class BookService {
    /*async addBook(bookData: Partial<IBook>): Promise<IBook> {
        const book = new Book(bookData);
        return await book.save();
    }

    async getAllBooks(): Promise<IBook[]> {
        return await Book.find();
    }

    async getBookById(id: string): Promise<IBook | null> {
        return await Book.findById(id);
    }*/

    async modifyBook(
        id: string,
        bookData: Partial<IBook>
    ): Promise<IBook | null> {
        return await Book.findByIdAndUpdate(id, bookData, { new: true });
    }

    async removeBook(id: string): Promise<IBook | null> {
        return await Book.findByIdAndDelete(id);
    }
}

export default new BookService();
