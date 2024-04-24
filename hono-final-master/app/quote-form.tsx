"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useQuotes } from "@/hooks/quotes";
import { client } from "@/lib/hono";

export const QuoteForm = () => {
  const [text, setText] = useState("");
  const { mutation } = useQuotes();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ text });
    setText("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>New quote</CardTitle>
        <CardDescription>
          Create a new quote.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
            <Input 
            disabled={mutation.isPending} 
            onChange={(e) => setText(e.target.value)} 
            value={text} 
            placeholder="Lorem ipsum"
          />
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button disabled={mutation.isPending}>Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
};
