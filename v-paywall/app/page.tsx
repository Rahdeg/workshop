import { auth } from "@/auth"
import { getSubscription } from "@/lib/subcription";
import { redirect } from "next/navigation";
import { SecureVideo } from "./secure-video";

export default async function Home() {

  const session = await auth();
  const subscription = await getSubscription()


  if (!session) {
    redirect("/api/auth/signin")
  }

  if (!subscription) {
    redirect("/pay")
  }


  return (
    <div className="flex items-center justify-center p-20">
      <SecureVideo />
    </div>
  );
}
