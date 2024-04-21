"use server";

import { asc, desc, eq, not } from "drizzle-orm";

import db from "@/db/drizzle";
import { todo } from "@/db/schema";

// export const getTodosByUserId = async (userId: number) => {
//   const data = await db.query.user.findMany({
//     with: {
//       todo: true,
//     },
//   });

//   return data;
// };

// export const getTodosByUserId = async (userId: number) => {
//     const data = await db.query.todo.findMany({
//       where: eq(todo.userId, userId),
//       with: {
//         userId: true,
//       },
//     });

//     return data;
//   };

export const addTodo = async (text: (typeof todo.$inferSelect)["text"]) => {
  const data = await db.insert(todo).values({
    text: text,
  });

  return data;
};

export const getData = async () => {
  const data = await db.select().from(todo).orderBy(desc(todo.createdAt));
  return data;
};

export const editTodo = async (
  id: (typeof todo.$inferSelect)["id"],
  text: (typeof todo.$inferSelect)["text"]
) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));
};

export const toggleTodo = async (id: (typeof todo.$inferSelect)["id"]) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));
};

export const deleteTodo = async (id: (typeof todo.$inferSelect)["id"]) => {
  await db.delete(todo).where(eq(todo.id, id));
};
