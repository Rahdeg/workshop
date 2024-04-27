import { lemonSqueezySetup } from "@lemonsqueezy/lemonsqueezy.js";

export const setupLemon = () => lemonSqueezySetup({
  apiKey: process.env.LS_API_KEY!
});
