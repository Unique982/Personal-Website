import { z } from "zod";
export const createContactUsSchema = z.object({
  username: z.object({
    firstname: z
      .string()
      .min(1, "First name is required")
      .max(20, "First name is too long")
      .trim(),
    lastname: z
      .string()
      .min(1, "Last name is required")
      .max(20, "Last name is too long")
      .trim(),
  }),
  email: z.email("Invalid Email").trim(),
  subject: z
    .string()
    .trim()
    .min(10, "Subject is required and must be at least 10 characters"),
  message: z.string().trim().min(1, "Message are required!"),
});
export const sendReplySchema = z.object({
  // zod ma neested object ma pani object validation garnu parxa
  /**
   * zod ma neested object ma pani object validation garnu parxa
   * hamro model ma ex:
   * reply:{
   * subject:"",
   * mesagae:''
   * }
   */
  reply: z.object({
    subject: z.string().trim().min(1, "Reply subject is required"),
    message: z.string().trim().min(1, "Reply message is required"),
    repliedBy: z
      .string()
      .trim()
      .min(1, "RepliedBy (admin name/email) is required"),
    repliedAt: z.date().optional(),
  }),
});
export type contatUsInput = z.infer<typeof createContactUsSchema>;
export type sendReplyInput = z.infer<typeof sendReplySchema>;
