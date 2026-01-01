import express, { Router } from "express";
import ServicesController from "../controller/services.controller";
const router: Router = express.Router();

//service create api
router
  .route("/")
  .post(ServicesController.createServices)
  // fetch service api
  .get(ServicesController.fetchServices);
// delete service api
router
  .route("/:id")
  .delete(ServicesController.deleteServices)
  // deatils service api
  .get(ServicesController.fetchServicesDetails)

  // update service api
  .patch(ServicesController.updateServices);

export default router;
