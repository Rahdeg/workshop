import crypto from "crypto"
import { createId } from '@paralleldrive/cuid2';
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/db/drizzle";
import { subscriptions } from "@/db/schema";

export const POST = async (request: NextRequest) => {
  try {
    const text = await request.text();
    const hmac = crypto.createHmac("sha256", process.env.LS_WEBHOOK_SECRET!);
    const digest = Buffer.from(hmac.update(text).digest("hex"), "utf8");
    const signature = Buffer.from(request.headers.get("x-signature") as string, "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      return new NextResponse("Invalid signature.", {
        status: 400,
      });
    }

    const payload = JSON.parse(text);
    
    const event = payload.meta.event_name;
    const userId = payload.meta.custom_data.user_id;

    console.log(
      "userId",
      userId,
    );

    if (event === "subscription_created") {
      await db.insert(subscriptions).values({
        id: createId(),
        userId,
        subscriptionId: payload.data.id,
        status: payload.data.attributes.status,
        orderId: `${payload.data.attributes.order_id}`,
        customerId: `${payload.data.attributes.customer_id}`,
        variantId: `${payload.data.attributes.variant_id}`,
        productId: `${payload.data.attributes.product_id}`,
      })
    }

    if (event === "subscription_updated") {
      await db.update(subscriptions).set({
        status: payload.data.attributes.status,
      })
    }

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error(error);
  }
};