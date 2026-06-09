import request from "supertest";
import { describe, it, expect, beforeEach } from "vitest";
import app, { resetAccounts, resetTransactions } from"../src/app.js";

beforeEach(() =>{
    resetAccounts();
    resetTransactions();
});


describe("Transfer API", () => {
    it("Should transfer money", async () => {
        const response = await request (app)
        .post("/transfers")
        .send({
            fromAccount: 1,
            toAccount: 2,
            amount: 100
        });
    
    expect(response.status).toBe(201);
    
    expect(response.body.status)
      .toBe("SUCCESS");
    });
});