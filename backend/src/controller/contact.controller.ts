import { Request, Response } from "express";
import Contact from "../model/contact.model";
import {
  contatUsInput,
  createContactUsSchema,
  sendReplyInput,
  sendReplySchema,
} from "../schema/contact.schema";
import { sendMail } from "../service/sendEmail";
class ContactUs {
  // user submit form
  static async submitFrom(req: Request, res: Response) {
    const validatedData: contatUsInput = createContactUsSchema.parse(req.body);
    const { username, email, message, subject } = validatedData;

    /**  Calculate time 24 hrs ago
     * kun pani user la per day chai only 1choti mtw request grw xa
     */
    const checkTimeCalculate = new Date(Date.now() - 24 * 60 * 60 * 1000);
    /**
     *  Check if same email already sent request within 24 hrs
     */
    const alreadCheck = await Contact.findOne({
      email: email,
      createdAt: { $gte: checkTimeCalculate }, // $gte vanko chai greater than or  equal ho
    });
    /**
     *  If exists → reject
     */
    if (alreadCheck) {
      return res
        .status(400)
        .json({ message: "You can submit contact form only once in 24 hours" });
    }
    // Conatct from ma aaya ko data save garna
    await Contact.create({
      username: {
        firstname: username.firstname,
        lastname: username.lastname,
      },
      email,
      message,
      subject,
    });
    res.status(200).json({ message: "Contact request submitted successful😀" });
  }
  // userform get
  static async fetchFromRecord(req: Request, res: Response) {
    const getAllContactList = await Contact.find();
    res.status(200).json({
      message: "Fetch all contact us record successful😀",
      data: getAllContactList,
    });
  }
  // delete user from data
  static async deleteFromRecord(req: Request, res: Response) {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact)
      return res.status(404).json({ messgae: "Conatct id not found🤷‍♂️" });
    res.status(200).json({ message: "Contact user delete successfuyl😀" });
  }
  // user from data fetch single
  static async userFromRecordDetails(req: Request, res: Response) {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    if (!contact)
      return res.status(404).json({ messgae: "Conatct id not found🤷‍♂️" });

    res
      .status(200)
      .json({ message: "Project datils fetch successful😀 ", data: contact });
  }
  //  user from data make read
  static async makeReadFromRecord(req: Request, res: Response) {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ messgae: "Conatct id not found🤷‍♂️" });
    }
    // if already read xa ki nai check
    if (contact.status === "read") {
      return res
        .status(409)
        .json({ message: "Contact is already marked as read 🙂" });
    }
    // already read xaina vani only chnage hunxa
    contact.status = "read";
    await contact.save();
    res.status(200).json({ message: "Contact marked as read😀" });
  }
  //  user from data send reply
  static async sendReplyFromRecord(req: Request, res: Response) {
    const { id } = req.params;
    const validatedData: sendReplyInput = sendReplySchema.parse(req.body);
    const { reply } = validatedData;
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ messgae: "Conatct id not found🤷‍♂️" });
    }
    // if check alreadyreplay xa ki nai
    if (contact.status === "replied")
      return res
        .status(409)
        .json({ message: "Contact has already been replied to ✅" });

    // if alrady xaina vani chai email send garnu paro
    await sendMail({
      to: contact.email,
      subject: reply.subject,
      text: reply.message,
    });

    // aba chai contact table ma update garnu paro
    contact.status = "replied";
    contact.reply = {
      ...reply,
      repliedAt: new Date(),
    };

    await contact.save();
    res
      .status(200)
      .json({ message: "Reply sent successfully and status updated" });
  }
}
export default ContactUs;
