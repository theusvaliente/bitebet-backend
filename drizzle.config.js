"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const drizzle_kit_1 = require("drizzle-kit");
exports.default = (0, drizzle_kit_1.defineConfig)({
    out: './drizzle',
    schema: './server/schema.ts',
    dialect: 'turso',
    dbCredentials: {
        url: process.env.TURSO_DB_URL,
        authToken: process.env.TURSO_DB_TOKEN,
    },
});
