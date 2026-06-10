import { executeTransfer } from "../services/transferService.js";
import { validateTransfer } from "../validators/transferValidator.js";


export function transferMoney(req, res) {
    const validation = validateTransfer(req.body);

    if (!validation.valid) {
      return res.status(400).json({
        error: validation.error,
      });
    }

    const { fromAccount, toAccount, amount } = req.body;

    const result = executeTransfer(fromAccount, toAccount, amount);

    if (result.error === "NOT FOUND") {
      return res.status(404).json({ error: "Account not found"});
    }

      if (result.error === "INSUFFICIENT FUNDS") {
      return res.status(404).json({ error: "Insufficient funds"});
    }

  return res.status(201).json({ status: "SUCCESS"});
  }
