import { Request } from "express";
import multer from "multer";
import { storage } from "../config/cloudinaryConfig";

export const upload = multer({
  storage: storage,
  fileFilter: (req: Request, file: Express.Multer.File, cb) => {
    const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];

    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only image support!"));
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});
