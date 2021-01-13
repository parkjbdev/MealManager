"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealDB_1 = __importDefault(require("../db/MealDB"));
let router = express_1.Router();
router.route('/meals/:year/:month')
    .get((req, res) => {
    if (req.params === undefined)
        return;
    const dateYear = Number(req.params.year);
    const dateMonth = Number(req.params.month);
    MealDB_1.default.find({ dateYear, dateMonth })
        .exec()
        .then((value) => {
        if (value.length === 0)
            res.json({ message: 'No Meals' });
        else
            res.json(value);
        res.end();
        return;
    });
    //	TODO catch error: no such file
});
exports.default = { router };
//# sourceMappingURL=GET_meal.js.map