const MAX_FILE_SIZE = 2 * 1024 * 1024;
import { z } from "zod";
export const schema = z.object({
  title: z.string().min(5, "name at least be 5 char"),

  price: z.coerce
    .number()
    .min(6000, "minimium price should be 6000")
    .max(60000, "maximum price should be 60000"),
  category: z.string(),
  description: z
    .string()
    .min(3, "description at least be 3 char")
    .max(255, "description at most 255 char"),
  image: z
    .any()
    .refine((files) => files?.length > 0, "Image is required")
    .refine((files) => {
      return files[0]?.size <= MAX_FILE_SIZE;
    }, `Max file size is 2MB.`),
});
