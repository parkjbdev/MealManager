"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealDB_1 = __importDefault(require("../db/MealDB"));
const path_1 = __importDefault(require("path"));
let router = express_1.Router();
router.route('/img/:year/:month/:date/:mealType')
    .get((req, res) => {
    var _a;
    const dateYear = Number(req.params.year);
    const dateMonth = Number(req.params.month);
    const dateDay = Number(req.params.date);
    let mealType = (_a = req.params.mealType) !== null && _a !== void 0 ? _a : '';
    MealDB_1.default.MealModel.findOne({ dateYear, dateMonth, dateDay, mealType })
        .exec()
        .then((value) => {
        let imgPath = path_1.default.resolve(__dirname, '..', '..', value.imgPath);
        res.sendFile(imgPath);
        return;
    });
    //	TODO catch error: no such file
});
router.route('/meals/:year/:month')
    .get((req, res) => {
    if (req.params === undefined)
        return;
    const dateYear = Number(req.params.year);
    const dateMonth = Number(req.params.month);
    MealDB_1.default.MealModel.find({ dateYear, dateMonth }).exec()
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