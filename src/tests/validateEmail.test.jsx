import { describe, it, expect } from "vitest";
import { validateEmail } from "../utils/validateEmail";

describe("test utils functions", () => {
    it("should be return true", () => {
        const email = "john@gmail.com";
        expect(validateEmail(email)).toBe(true);
    });

    it("should be return true", () => {
        const email = "john@.com";
        expect(validateEmail(email)).toBe(false);
    });
});
