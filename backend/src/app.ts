// src/app.ts
import express from "express";
import router from "./router/index";

// import { Request, Response } from "express";

const app = express();
console.log("run");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  console.log("API Test route hit!");
  res.status(200).json({ message: "Server is responding!" });
});

// here all router
app.use("/api", router);

export default app;
