export function validateTransfer({ fromAccount, toAccount, amount }) {
    if (!fromAccount || !toAccount) {
        return { valid: false, error: "Missing account ID's"};
    }

    if (typeof amount !== "number" || amount <= 0) {
        return { valid: false, error: "Invalid amount" };
    }

    if (fromAccount === toAccount) {
        return { valid: false, error: "Cannot transfert to same account" }; 
    }

    return { valid: true };
}