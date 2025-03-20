import { Request, Response } from "express";
import Rental from "../models/Rental";
import Book from "../models/Book";

export const rentBook = async (req: Request, res: Response) => {
  const { userId, bookId } = req.body;
  try {
    const book = await Book.findById(bookId);
    if (!book || !book.available) return res.status(400).json({ error: "Book not available" });

    await Rental.create({ user: userId, book: bookId });
    await Book.findByIdAndUpdate(bookId, { available: false });

    res.status(200).json({ message: "Book rented successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error renting book" });
  }
};

export const returnBook = async (req: Request, res: Response) => {
  const { rentalId } = req.body;
  try {
    const rental = await Rental.findById(rentalId);
    if (!rental || rental.returned) return res.status(400).json({ error: "Invalid rental" });

    await Rental.findByIdAndUpdate(rentalId, { returned: true });
    await Book.findByIdAndUpdate(rental.book, { available: true });

    res.status(200).json({ message: "Book returned successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error returning book" });
  }
};
