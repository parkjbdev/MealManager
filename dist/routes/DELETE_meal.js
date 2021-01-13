"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealDB_1 = __importDefault(require("../db/MealDB"));
const router = express_1.Router();
router.route('/:mealId')
    .delete((req, res) => {
    const _id = req.params.mealId;
    MealDB_1.default.findByIdAndDelete(_id, {}, () => {
    });
});
exports.default = { router };
//# sourceMappingURL=DELETE_meal.js.map