"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MealSchema = new mongoose_1.default.Schema({
    //	img
    name: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    mealType: { type: String, required: true },
    menus: { type: String },
    snacks: { type: String }
});
exports.MealSchema = MealSchema;
//# sourceMappingURL=MealSchema.js.map