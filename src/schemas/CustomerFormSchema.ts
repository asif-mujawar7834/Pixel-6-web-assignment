import { z } from "zod";

export const panNumberSchema = z
  .string({ message: "PAN number is required." })
  .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, {
    message:
      "Invalid PAN card format. It should be 5 letters, 4 digits, and 1 letter (e.g., ABCDE1234F).",
  });

export const pincodeSchema = z
  .string()
  .regex(/^[1-9][0-9]{5}$/, { message: "Please enter valid pincode" });

export const CustomerFormSchema = z.object({
  id: z.number().optional(),
  name: z
    .string()
    .min(1, { message: "Full name is required" })
    .max(100, { message: "Full name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Full name can only contain letters and spaces",
    }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address" })
    .refine((email) => email === email.toLowerCase(), {
      message: "Email address must be in lowercase",
    }),
  panNumber: panNumberSchema,
  phone: z
    .string()
    .max(13)
    .regex(/^\+91\d{10}$/, {
      message: "Phone number must be in a valid format, e.g., +915234567890",
    }),
  address1: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(500, "Address must be at most 500 characters"),
  address2: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === undefined ||
        val === "" ||
        (val.length >= 2 && val.length <= 500),
      {
        message:
          "Address line 2must be between 3 and 100 characters long if provided",
      }
    ),
  pincode: pincodeSchema,
  state: z
    .string()
    .min(3, { message: "State must be at least 3 characters long" })
    .max(50, { message: "State must be no more than 20 characters long" })
    .regex(/^[^\d]*$/, { message: "State must not contain numbers" }),
  city: z
    .string()
    .min(3, { message: "City must be at least 3 character long" })
    .max(50, { message: "City must be no more than 25 characters long" }),
});
