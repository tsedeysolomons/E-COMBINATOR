import { applicationFrom } from "@/db/schema";
import { db } from "./db";

export async function addApplicationForm(formData: FormData) {
  "use server";
  const title = formData.get("title");
  const content = formData.get("content");

  // Update data
  // Revalidate cache

  await db.insert(applicationFrom).values({
    title: title ? String(title) : "",
    content: content ? String(content) : "",
  })
}
