"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbInfo_json_1 = __importDefault(require("../auth/dbInfo.json"));
const MealSchema_1 = __importDefault(require("./schema/MealSchema"));
// mongoDB Connection
const conn = mongoose_1.default.createConnection(dbInfo_json_1.default.mealDBConnectionString, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
conn.once('open', () => console.log('connected to db server', conn.host));
conn.once('error', error => console.error.bind(console, error));
const model = conn.model('meal', MealSchema_1.default);
exports.default = model;
//# sourceMappingURL=MealDB.js.map