import orchestrator from "test/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("GET /api/v1/status", () => {
  describe("Anonymous User", () => {
    test("Retrieving current system status", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
      expect(response.status).toBe(200);

      const responseBody = await response.json();

      const parseUpdateAt = new Date(responseBody.updated_at).toISOString();
      expect(responseBody.updated_at).toBe(parseUpdateAt);

      // expect(responseBody.dependencies.database.version).toBe("16.2");
      expect(responseBody.dependencies.database.max_connections).toBe(100);
      expect(responseBody.dependencies.database.opened_connection).toBe(1);
    });
  });
});
