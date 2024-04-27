"use server";

import { signStreamUrl } from "@/lib/cdn";
import { getSubscription } from "@/lib/subcription";

const HOUR_IN_SECONDS = 10;

const bunnyIframeUrl =
  "https://iframe.mediadelivery.net/embed/234802/4bc23b71-4111-44d8-ab11-30f69e97055f?autoplay=true&loop=false&muted=false&preload=true&responsive=true"; // Replace this with your video

export const getSignedUrl = async () => {
  const subscription = await getSubscription();

  if (!subscription) {
    throw new Error("Unauthorized");
  }

  const signedUrl = await signStreamUrl(
    bunnyIframeUrl,
    process.env.BUNNY_TOKEN!,
    HOUR_IN_SECONDS
  );

  return signedUrl;
};
