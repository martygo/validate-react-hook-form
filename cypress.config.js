/* eslint-disable global-require */
import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:5173/",
    },
    setupNodeEvents(on, config) {
        require("@cypress/code-coverage/task")(on, config);
        on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));

        return config;
    },
});
