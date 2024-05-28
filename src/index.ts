import cors from "cors";
import express from "express";

import http from "http";
import log from "./helpers/logger";
import connectDB from "./db/connection";

const app = express();

app.use(express.json());

// Logging api call
app.use((req, res, next) => {
  log.warn(`${req.method} ${req.originalUrl}`);
  next();
});
app.get("/check", (req, res) => {
  res.send("All OK!");
});

// Create server
const server = http.createServer(app);
const port = process.env.PORT || 5000;
server.listen(port, async () => {
  await connectDB();
  log.info(`Server running on http://localhost:${port}`);
});
