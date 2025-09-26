import { test } from "@playwright/test";

test.describe("Google search", () => {
  test.beforeAll(async () => {
    console.log("Before all tests");
  });
  
  test.afterAll(async () => {
    console.log("<=== After all tests");
  });   
  
    test.beforeEach(async () => {
    console.log("   Before each test");
  });

  test.afterEach(async () => {
    console.log("   After each test");
  });

  test("Test Case 1", async () => {
    console.log("       Test Case 1 is executed");
  });

  test("Test Case 2", async () => {
    console.log("       Test Case 2 is executed");
  });

  test("Test Case 3", async () => {
    console.log("       Test Case 3 is executed");
  });
});
