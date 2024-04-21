import { relations } from "drizzle-orm";
import {
  serial,
  text,
  boolean,
  pgTable,
  timestamp,
  integer,
  uuid,
} from "drizzle-orm/pg-core";

// export const user = pgTable("user", {
//   id: serial("id").primaryKey(),
//   name: text("name").notNull(),
// });

// export const usersRelations = relations(user, ({ many }) => ({
//   todo: many(todo),
// }));

export const todo = pgTable("todo", {
  id: uuid("id").primaryKey().defaultRandom(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  //   userId: integer("user_id").references(() => user.id, { onDelete: "cascade" }),
});

// export const postsRelations = relations(todo, ({ one }) => ({
//   userId: one(user, {
//     fields: [todo.userId],
//     references: [user.id],
//   }),
// }));
