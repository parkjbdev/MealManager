"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// mongoDB Connection
const mongoose_1 = __importDefault(require("mongoose"));
const dbInfo_json_1 = __importDefault(require("../../auth/dbInfo.json"));
const conn = mongoose_1.default.createConnection(dbInfo_json_1.default.mealDBConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
conn.once('open', () => console.log('connected to db server', conn.host));
conn.once('error', error => console.error.bind(console, error));
exports.default = { conn };
//# sourceMappingURL=MealDB.js.map