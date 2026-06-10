import { createRequestHandler } from "@react-router/express";
import express from "express";

const app = express();

// Serve static assets from the client build directory with cache headers
app.use(
  "/assets",
  express.static("build/client/assets", {
    immutable: true,
    maxAge: "1y",
  })
);

// Serve other static files (like favicon, robots.txt, etc.)
app.use(express.static("build/client"));

// Pass all other requests to the React Router request handler
app.all(
  "*",
  createRequestHandler({
    build: () => import("./build/server/index.js"),
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
