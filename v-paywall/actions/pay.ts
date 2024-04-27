"use server";

import { createCheckout } from "@lemonsqueezy/lemonsqueezy.js";

import { auth } from "@/auth";
import { setupLemon } from "@/lib/ls";
import { getSubscription } from "@/lib/subcription";

setupLemon();

export const checkout = async () => {
  const session = await auth();

  if (!session || !session.user?.id || !session.user?.email) {
    throw new Error("Unauthorized");
  }

  const subscription = await getSubscription();

  if (subscription) {
    throw new Error("Already subscribed");
  }

  const checkout = await createCheckout(
    process.env.LS_STORE_ID!,
    process.env.LS_PRODUCT_VARIANT_ID!,
    {
      checkoutData: {
        email: session.user.email,
        custom: {
          user_id: session.user.id,
        },
      },
      productOptions: {
        redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/`,
      },
    }
  );

  const checkoutUrl = checkout.data?.data.attributes.url;

  if (!checkoutUrl) {
    throw new Error("Missing checkout URL");
  }

  return checkoutUrl;
};
