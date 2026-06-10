import { accounts, transactions } from "../../src/data/database.js";

export function resetData() {
    accounts.length = 0;
    accounts.push(
        { id: 1, owner: "Bruno Almeida", balance: 2500 },
        { id: 2, owner: "Joe Cashflow", balance: 1500 }
    );

    transactions.length = 0;
}    

