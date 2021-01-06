"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbAccessKey_json_1 = __importDefault(require("../auth/dbAccessKey.json"));
// mongoDB Connection
mongoose_1.default
    .connect(dbAccessKey_json_1.default.connectionString + 'mealDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(value => console.log('connected to db server', value.connection.host))
    .catch(error => console.error.bind(console, 'connection error'));
const MealSchema = new mongoose_1.default.Schema({
    imgName: { type: String, required: true, unique: true },
    imgPath: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    date: { type: Date, required: true, default: Date.now },
    dateYear: { type: Number, required: true },
    dateMonth: { type: Number, required: true },
    dateDay: { type: Number, required: true },
    mealType: { type: String, required: true },
    menus: { type: [String] },
    snacks: { type: [String] }
});
const MealModel = mongoose_1.default.model('meal', MealSchema);
exports.default = { MealModel };
//# sourceMappingURL=MealDB.js.map