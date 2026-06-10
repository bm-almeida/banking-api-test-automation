import { accounts } from "../data/database.js";

export function getAccount(req, res) {
    const account = accounts.find (
        a => a.id === Number(req.params.id)
    );
    
    if (!account) {
        return res.status(404).json({ error: "Account not found" })
    }

    res.json(account);
}