"use client";

import Link from "next/link";
import Image from "next/image";
import { Loader2, Unlock } from "lucide-react";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button"
import { useSession } from "@/hooks/use-session";

const SignInPage = () => {
  const { status, session } = useSession();

  if (status === "pending") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (session) {
    redirect("/");
  }

  return (
    <div className="w-full lg:grid min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Welcome back!</h1>
            <p className="text-balance text-muted-foreground">
              Sign in to your account
            </p>
          </div>
          <div className="grid gap-4">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/api/auth/signin">
                Login
                <Unlock className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};
 
export default SignInPage;
