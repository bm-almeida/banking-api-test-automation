import { accounts } from "../data/database.js";

export function getAccountById(id) {
    return accounts.find((a) => a.id === id);
}