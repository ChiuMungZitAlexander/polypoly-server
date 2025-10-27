import Elysia from "elysia";

import jsonData from "./data.json";

export const eventsRouter = new Elysia({ prefix: "/events" }).get("/", () => {
  const data = jsonData as { id: string; slug: string; icon: string }[];
  return data;
});
