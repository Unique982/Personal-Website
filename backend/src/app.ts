// src/app.ts
import express from "express";
import cookieParser from "cookie-parser";
import { countVisitor } from "./middleware/visitorCount";
import router from "./router/index";

// import { Request, Response } from "express";

const app = express();
app.use(cookieParser());
app.use(countVisitor);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// here all router
app.use("/api", router);

export default app;
