import { Request, Response } from "express";
import Book from "../models/Book";

export const addBook = async (req: Request, res: Response) => {
  try {
    const { title, author } = req.body;
    const coverImage = req.file ? `/uploads/${req.file.filename}` : null;

    const book = await Book.create({ title, author, coverImage });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: "Error adding book" });
  }
};
