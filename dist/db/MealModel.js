"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MealSchema_1 = require("./MealSchema");
let MealModel = mongoose_1.default.model('meal', MealSchema_1.MealSchema);
exports.MealModel = MealModel;
//# sourceMappingURL=MealModel.js.map