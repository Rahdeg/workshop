import { auth } from "@/auth";
import { db } from "@/db/drizzle";
import { subscriptions, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getSubscription = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) return null;

  const dbUser = await db.select().from(users).where(eq(users.id, userId));

  if (!dbUser[0]?.id) return null;

  const dbSubscription = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.userId, dbUser[0].id));

  const subscription = dbSubscription[0];

  return !!subscription;
};
