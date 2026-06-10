# Banking API Test Automation

Simple REST API built with Node.js and Express, used for practicing API test automation with Vitest and Supertest.

## Tech Stack

- Node.js
- Express.js
- Vitest
- Supertest
- JavaScript (ES Modules)

## Project Structure


src/
app.js
server.js

controllers/
accountController.js
transferController.js

services/
transferService.js

validators/
transferValidator.js

data/
database.js

tests/
accounts.test.js
transfers.test.js
helpers/
resetData.js


## API Endpoints

### Get account

GET /accounts/:id

Returns account information.

Response:
```json
{
  "id": 1,
  "owner": "Bruno Almeida",
  "balance": 2500
}
Create transfer

POST /transfers

Request body:

{
  "fromAccount": 1,
  "toAccount": 2,
  "amount": 100
}

Response:

{
  "status": "SUCCESS"
}
Get transactions

GET /accounts/:id/transactions

Returns all transactions for a given account.

Tests

Run tests:

npm test

Or:

npx vitest run

Covered scenarios:

Account retrieval
Successful transfer
Account not found (404)
Insufficient funds (400)
Run Project

Install dependencies:

npm install

Start server:

node src/server.js
Notes
In-memory data store (no database)
State is reset during tests using resetData()
Designed for QA automation practice