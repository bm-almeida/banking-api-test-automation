📌 Banking API Test Automation (Vitest + Supertest)

A simple banking API built with Node.js + Express, covered with automated API tests using Vitest and Supertest.
This project simulates basic banking operations such as account retrieval and money transfers.

🚀 Tech Stack
Node.js
Express.js
Vitest (test runner)
Supertest (HTTP testing)
JavaScript (ES Modules)
📁 Project Structure
src/
  app.js            # Express application
  server.js         # Server entry point (optional run)
tests/
  accounts.test.js  # Account API tests
  transfers.test.js # Transfer API tests
⚙️ Installation

Clone the repository:

git clone https://github.com/YOUR_USERNAME/banking-api-test-automation.git
cd banking-api-test-automation

Install dependencies:

npm install
▶️ Running the API

Start the server (optional for manual testing):

node src/server.js
🧪 Running Tests

Run all automated tests:

npm test

Or directly with Vitest:

npx vitest run
📡 API Endpoints
Get account by ID
GET /accounts/:id

Response:

{
  "id": 1,
  "owner": "Bruno Almeida",
  "balance": 2500
}
Transfer money
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
Get account transactions
GET /accounts/:id/transactions
🧪 Test Coverage

The test suite covers:

✔ Positive scenarios
Successful account retrieval
Successful money transfer
❌ Negative scenarios
Account not found (404)
Insufficient funds (400)
Invalid transfer data
🧠 Key Features
REST API simulation of banking system
In-memory data store (no database required)
Full API test automation with Vitest
Supertest for HTTP request simulation
Reset functions for test isolation
📌 Future Improvements
Add database integration (MongoDB / PostgreSQL)
Add authentication (JWT)
Improve validation layer
Add CI pipeline (GitHub Actions)
Improve architecture (service/controller pattern)
👨‍💻 Author

Bruno Almeida
