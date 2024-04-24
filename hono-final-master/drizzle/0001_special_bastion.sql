CREATE TABLE IF NOT EXISTS "quote" (
	"id" text PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"userId" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
