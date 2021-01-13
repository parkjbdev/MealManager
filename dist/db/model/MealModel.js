"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
const MealDB_1 = __importDefault(require("../conn/MealDB"));
const MealSchema_1 = __importDefault(require("../schema/MealSchema"));
exports.model = MealDB_1.default.model('meal', MealSchema_1.default);
//# sourceMappingURL=MealModel.js.map