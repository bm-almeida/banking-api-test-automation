import { accounts, transactions } from "../data/database.js";

export function executeTransfer(fromAccount, toAccount, amount) {
    const sender = accounts.find((a) => a.id === fromAccount);
    const receiver = accounts.find((a) => a.id === toAccount);

    if (!sender || !receiver) {
        return { error: "NOT_FOUND" };
    }

    if (sender.balance < amount) {
        return { error: "INSUFFICIENT_FUNDS" };
    }
sender.balance -= amount;
receiver.balance += amount;

transactions.push({
    id: transactions.length +1,
    fromAccount,
    toAccount,
    amount,
});

return { sucess: true };
}