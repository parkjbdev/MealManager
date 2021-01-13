"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    dateYear: { type: Number, required: true },
    dateMonth: { type: Number, required: true },
    dateDay: { type: Number, required: true },
    mealType: { type: String, required: true },
    menus: { type: [String] },
    snacks: { type: [String] },
    imgName: { type: String, required: true }
});
exports.default = schema;
//# sourceMappingURL=MealSchema.js.map