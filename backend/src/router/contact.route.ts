import express, { Router } from "express";
import ContactUs from "../controller/contact.controller";
import { asynErrorHandle } from "../service/asynErrorHandle";
import AuthMiddleware, { Role } from "../middleware/authMiddlewre";

const router: Router = express.Router();

// user add contact from
router
  .route("/")
  .post(asynErrorHandle(ContactUs.submitFrom))
  // fetch all contact
  .get(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(ContactUs.fetchFromRecord)
  );
// delete contact
router
  .route("/:id")
  .delete(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(ContactUs.deleteFromRecord)
  )
  // view single contact
  .get(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(ContactUs.userFromRecordDetails)
  );
// makeRead status
router
  .route("/make-read/:id")
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(ContactUs.makeReadFromRecord)
  );
// send reply
router
  .route("/send/reply/:id")
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(ContactUs.sendReplyFromRecord)
  );

export default router;
