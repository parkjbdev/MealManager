"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gfs = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbInfo_json_1 = __importDefault(require("../auth/dbInfo.json"));
// mongoDB Connection
const conn = mongoose_1.default.createConnection(dbInfo_json_1.default.mealDBConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
conn.once("open", () => {
    console.log('connected to db server', conn.host);
});
conn.once("error", error => {
    console.error.bind(console, error);
});
const MealSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    dateYear: { type: Number, required: true },
    dateMonth: { type: Number, required: true },
    dateDay: { type: Number, required: true },
    mealType: { type: String, required: true },
    menus: { type: [String] },
    snacks: { type: [String] },
    imgName: { type: String, required: true }
    // img: {data: Buffer, contentType: String}
});
const MealModel = conn.model('meal', MealSchema);
exports.default = { MealModel };
//# sourceMappingURL=MealDB.js.map