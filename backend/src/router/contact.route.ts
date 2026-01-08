import express, { Router } from "express";
import ContactUs from "../controller/contact.controller";
import { asynErrorHandle } from "../service/asynErrorHandle";
import AuthMiddleware from "../middleware/authMiddlewre";

const router: Router = express.Router();

// user add contact from
router
  .route("/")
  .post(asynErrorHandle(ContactUs.submitFrom))
  // fetch all contact
  .get(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle(ContactUs.fetchFromRecord)
  );
// delete contact
router
  .route("/:id")
  .delete(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle(ContactUs.deleteFromRecord)
  )
  // view single contact
  .get(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle(ContactUs.userFromRecordDetails)
  );
// makeRead status
router
  .route("/make-read/:id")
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle(ContactUs.makeReadFromRecord)
  );
// send reply
router
  .route("/send/reply/:id")
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle(ContactUs.sendReplyFromRecord)
  );

export default router;
