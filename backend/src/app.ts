import express from "express";
const app = express();
app.use(express.json());

import about from "./router/about.router";
app.use("/", about);
export default app;
