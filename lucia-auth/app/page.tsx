import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/auth";
import LogOutButton from "./components/logout-button";

export default async function Home() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }
  return (
    <>
      <h1>Logged in as , {user.username}!</h1>
      <p>User type: {user.role}</p>
      <LogOutButton />
    </>
  )


}
