import { describe, it, expect, beforeEach } from "vitest";
import request from "supertest";
import app from"../src/app.js";
import { resetData } from "./helpers/resetData.js";

beforeEach(() => {
    resetData();
});



describe("Transfer API", () => {
    it("Should transfer money", async () => {
        const response = await request (app)
        .post("/transfers")
        .send({
            fromAccount: 1,
            toAccount: 2,
            amount: 100
        })
    
    expect(response.status).toBe(201);
    
    expect(response.body.status)
      .toBe("SUCCESS");
    });
});