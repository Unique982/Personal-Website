import express, { Router } from "express";
import ServicesController from "../controller/services.controller";
import AuthMiddleware, { Role } from "../middleware/authMiddlewre";
import { asynErrorHandle } from "../service/asynErrorHandle";
import { upload } from "../service/multer";
const router: Router = express.Router();

//service create api
router
  .route("/")
  .post(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    upload.single("icon"),
    asynErrorHandle(ServicesController.createServices)
  )
  // fetch service api
  .get(asynErrorHandle(ServicesController.fetchServices));
// delete service api
router
  .route("/:id")
  .delete(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(ServicesController.deleteServices)
  )
  // deatils service api
  .get(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle(ServicesController.fetchServicesDetails)
  )

  // update service api
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    upload.single("icon"),
    asynErrorHandle(ServicesController.updateServices)
  );
router
  .route("/status/:id")
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(ServicesController.statusServices)
  );

export default router;
