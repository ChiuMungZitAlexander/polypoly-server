import { Elysia } from "elysia";

import { eventsRouter } from "./modules/events";

const app = new Elysia()
  .all("/", () => "Welcome to PolyPoly server")
  .use(eventsRouter)
  .listen(process.env.PORT || 3000);

console.log(
  `PolyPoly server is running at ${app.server?.hostname}:${app.server?.port}`
);
