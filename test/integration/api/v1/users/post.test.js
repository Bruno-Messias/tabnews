import { version as uuidVersion } from "uuid";
import orchestrator from "test/orchestrator";
import user from "models/user";
import password from "models/password";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("POST /api/v1/users", () => {
  describe("Anonymous User", () => {
    test("With unique and valid data", async () => {
      const response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "john_doe",
          email: "teste@mail.com",
          password: "senha1234",
        }),
      });
      expect(response.status).toBe(201);

      const responseBody = await response.json();
      expect(responseBody).toEqual({
        id: responseBody.id,
        username: "john_doe",
        email: "teste@mail.com",
        password: responseBody.password,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });

      expect(uuidVersion(responseBody.id)).toBe(4);
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();

      const userInDatabase = await user.findOneByUsername("john_doe");
      const correctPasswordMatch = await password.compare(
        "senha1234",
        userInDatabase.password,
      );

      const inCorrectPasswordMatch = await password.compare(
        "senha",
        userInDatabase.password,
      );
      expect(correctPasswordMatch).toBe(true);
      expect(inCorrectPasswordMatch).toBe(false);
    });

    test("With duplicated 'email'", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "duplicated_email_1",
          email: "duplicated@mail.com",
          password: "senha1234",
        }),
      });
      expect(response1.status).toBe(201);

      const response2 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "duplicated_email_2",
          email: "Duplicated@mail.com",
          password: "senha1234",
        }),
      });
      expect(response2.status).toBe(400);
      const response2Body = await response2.json();

      expect(response2Body).toEqual({
        name: "ValidationError",
        message: "O email informado já está cadastrado.",
        action: "Utilize outro email para realizar essa operação.",
        status_code: 400,
      });
    });

    test("With duplicated 'username'", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "duplicated_username",
          email: "duplicated_user_1@mail.com",
          password: "senha1234",
        }),
      });
      expect(response1.status).toBe(201);

      const response2 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "Duplicated_username",
          email: "duplicated_user_2@mail.com",
          password: "senha1234",
        }),
      });
      expect(response2.status).toBe(400);
      const response2Body = await response2.json();

      expect(response2Body).toEqual({
        name: "ValidationError",
        message: "O username informado já está cadastrado.",
        action: "Utilize outro username para essa operação.",
        status_code: 400,
      });
    });
  });
});
