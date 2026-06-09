# 📌 Banking API Test Automation (Vitest + Supertest)

A simple banking API built with Node.js + Express, covered with automated API tests using Vitest and Supertest.  
This project simulates basic banking operations such as account retrieval and money transfers.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- Vitest (test runner)
- Supertest (HTTP testing)
- JavaScript (ES Modules)

---
=======
# Banking API Test Automation

This project is a simple banking API built with Node.js and Express. It is used to practice API test automation using Vitest and Supertest.

## Tech Stack

- Node.js
- Express.js
- Vitest
- Supertest

## Project Structure

src/
  app.js        Express application with API routes
  server.js     Server entry point (optional)

tests/
  accounts.test.js   Tests for account endpoints
  transfers.test.js  Tests for transfer functionality

## API Endpoints

### Get account

GET /accounts/:id

Returns account data by ID.

Response:
{
  "id": 1,
  "owner": "Bruno Almeida",
  "balance": 2500
}

### Create transfer

POST /transfers

Body:
{
  "fromAccount": 1,
  "toAccount": 2,
  "amount": 100
}

Response:
{
  "status": "SUCCESS"
}

### Get transactions

GET /accounts/:id/transactions

Returns all transactions for an account.

## Tests

Run tests with:

npm test

or

npx vitest run

Tests cover:
- Account retrieval
- Money transfer
- Error cases (missing account, insufficient funds)

## Run project

Install dependencies:

npm install

Run server:

node src/server.js
