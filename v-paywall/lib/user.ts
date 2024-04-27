import { eq } from "drizzle-orm";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

export const getUser = async (userId: string) => {
  const dbUser = await db
    .select()
    .from(users)
    .where(
      eq(users.id, userId)
    );

  return dbUser[0];
};
