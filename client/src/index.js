import express from "express";
import { queueRandomMessage } from "./producer.js";

const app = express();

const port = 3002;
app.use(express.json());

app.post("/", (req, res) => {
  queueRandomMessage({ ...(req?.body || {}) });
  return res.json({ status: true, message: "message produced successfully" });
});

app.listen(port, () => {
  console.log("Server Started at", port);
});
