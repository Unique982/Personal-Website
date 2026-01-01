// app.ts
import express from "express";
import router from "./router/index";
// import swaggerUi from "swagger-ui-express";

// import swaggerDocument from "./config/swagger-output.json";
const app = express();
app.use(express.json());
// here all router
app.use(router);

// app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
