import { Request, Response, NextFunction } from "express";

export class CreateNoteDataValidator {
  validate(request: Request, response: Response, next: NextFunction) {
    const { content } = request.body;

    if (!content) {
      return response
        .status(400)
        .json({ message: "O conteúdo do recado é obrigatório." });
    }
    return next();
  }
}
