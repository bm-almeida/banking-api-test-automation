import express from "express";

const app = express();

app.use(express.json());

/* =========================
   STATE (in-memory DB)
========================= */

let accounts = [
  {
    id: 1,
    owner: "Bruno Almeida",
    balance: 2500,
  },
  {
    id: 2,
    owner: "Joe Cashflow",
    balance: 1500,
  },
];

const transactions = [];

/* =========================
   RESET FUNCTIONS (TESTING)
========================= */

export function resetAccounts() {
  accounts = [
    {
      id: 1,
      owner: "Bruno Almeida",
      balance: 2500,
    },
    {
      id: 2,
      owner: "Joe Cashflow",
      balance: 1500,
    },
  ];
}

export function resetTransactions() {
  transactions.length = 0;
}

/* =========================
   ROUTES
========================= */

// Get Account by id

app.get("/accounts/:id", (req, res) => {
  const account = accounts.find(
    (a) => a.id === Number(req.params.id)
  );

  if (!account) {
    return res.status(404).json({
      error: "Account not found",
    });
  }

  res.json(account);
});

// Post transfer money

app.post("/transfers", (req, res) => {
  const { fromAccount, toAccount, amount } = req.body;

  const sender = accounts.find(
    a => a.id === fromAccount
  );
  
  const receiver = accounts.find(
    a => a.id === toAccount
  );

  if (!sender || !receiver) {
    return res.status(404).json({
      error: "Account not found"
    });
  }

  if (sender.balance < amount) {
    return res.status(400).json({
      error: "Insufficient funds"
    });
  } 

  sender.balance -= amount;
  receiver.balance += amount;

  transactions.push({
    id: transactions.length + 1,
    fromAccount,
    toAccount,
    amount,
  });

  res.status(201).json({
    status: "SUCCESS"
  });
});

// GET Transactions for
app.get("/accounts/:id/transactions", (req, res) => {
  const accountId = Number(req.params.id);

const accountTransactions = transactions.filter(
  (t) => 
    t.fromAccount === accountId ||
    t.toAccount === accountId
);  

  res.json(accountTransactions);
});

/* =========================
   EXPORT
========================= */
export default app;
