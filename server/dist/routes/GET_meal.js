"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealDB_1 = __importDefault(require("../db/MealDB"));
const router = express_1.Router();
router.route('/meals/:year/:month/').get((req, res) => {
    if (req.params === undefined)
        return;
    const dateYear = Number(req.params.year);
    const dateMonth = Number(req.params.month);
    MealDB_1.default.find({ dateYear, dateMonth })
        .sort({ dateDay: 1, mealType: -1 })
        .exec()
        .then((value) => {
        res.json(value);
        res.end();
        return;
    });
    //	TODO catch error: no such file
});
exports.default = { router };
