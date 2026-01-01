// config/swagger.ts
import swaggerAutogen from "swagger-autogen";
import router from "../router/index";
const outputFile = "./swagger-output.json";

const doc = {
  info: {
    title: "My Api Title",
    version: "1.0.0",
  },
  baseUrl: "http://localhost:4000",
};
swaggerAutogen(outputFile, router, doc);
