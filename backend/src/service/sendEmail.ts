import transporter from "../config/nodemailer";

interface IMailData {
  to: string;
  subject: string;
  text: string;
}

export const sendMail = async (data: IMailData) => {
  const mailTransporter = transporter;

  const mailOption = {
    from: "Unique Neupane Official Website <developerunique123@gmail.com>",
    to: data.to,
    subject: data.subject,
    text: data.text,
  };
  try {
    await mailTransporter.sendMail(mailOption);
  } catch (error) {
    console.log(error);
  }
};
