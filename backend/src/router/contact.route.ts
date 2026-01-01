import express, { Router } from "express";
import ContactUs from "../controller/contact.controller";

const router: Router = express.Router();

// user add contact from
router
  .route("/")
  .post(ContactUs.submitFrom)
  // fetch all contact
  .get(ContactUs.fetchFromRecord);
// delete contact
router
  .route("/:id")
  .delete(ContactUs.deleteFromRecord)
  // view single contact
  .get(ContactUs.userFromRecordDetails);
// makeRead status
router.route("/make-read/:id").patch(ContactUs.makeReadFromRecord);
// send reply
router.route("/send/reply/:id").patch(ContactUs.sendReplyFromRecord);

export default router;
