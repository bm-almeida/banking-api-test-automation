import express from "express";
import { getAccount } from "./controllers/accountControllers.js";
import { transferMoney } from "./controllers/transferControllers.js";

const app = express();
app.use(express.json());

app.get("/accounts/:id", getAccount);
app.post("/transfers", transferMoney);

export default app;
