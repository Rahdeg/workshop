"use client";

import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";

import { Navbar } from "@/components/navbar";
import { useSession } from "@/hooks/use-session";

import { QuoteForm } from "./quote-form";
import { QuoteList } from "./quote-list";

export default function Home() {
  const { status, session } = useSession();

  if (status === "pending") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto w-full max-w-3xl items-start gap-6">
          <div className="grid gap-6">
            <QuoteForm />
            <QuoteList />
          </div>
        </div>
      </main>
    </div>
  );
}
