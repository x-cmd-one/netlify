import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  return Response.json({ version: "v0.1.0" });
};
