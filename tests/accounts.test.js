import { describe, it , expect , beforeEach } from "vitest";
import request from "supertest";
import app from "../src/app.js";
import { resetData } from "./helpers/resetData.js";

beforeEach(() =>{
  resetData();
});

describe("Accounts API", () => {
  it("should return account information", async () => {
    const response = await request(app)
      .get("/accounts/1");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      id: 1,
      owner: "Bruno Almeida",
      balance: 2500
    });
    });

    it("should return 404 when account does not exist", async () => {
      const response = await request(app)
        .get("/accounts/999");

      expect(response.status).toBe(404);


      
      });
    });