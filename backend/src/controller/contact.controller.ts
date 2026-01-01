import { Request, Response } from "express";
class ContactUs {
  // user submit form
  static async submitFrom(req: Request, res: Response) {}
  // userform get
  static async fetchFromRecord(req: Request, res: Response) {}
  // delete user from data
  static async deleteFromRecord(req: Request, res: Response) {}
  // user from data fetch single
  static async userFromRecordDetails(req: Request, res: Response) {}
  //  user from data make read
  static async makeReadFromRecord(req: Request, res: Response) {}
  //  user from data send reply
  static async sendReplyFromRecord(req: Request, res: Response) {}
}
export default ContactUs;
