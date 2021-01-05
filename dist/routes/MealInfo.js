"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealDB_1 = __importDefault(require("../db/MealDB"));
let router = express_1.Router();
router.route('/:year/:month')
    .get((req, res) => {
    if (req.params === undefined)
        return;
    const year = Number(req.params.year);
    const month = Number(req.params.month);
    MealDB_1.default.MealModel.find({ dateYear: year, dateMonth: month }).exec()
        .then((value) => {
        if (value.length === 0)
            res.send('No Meals');
        else
            res.send(value);
        res.end();
    });
});
router.route('/')
    .get((req, res) => {
    var _a, _b;
    let dateString = (_a = req.query.date) !== null && _a !== void 0 ? _a : '';
    let mealTypeString = (_b = req.query.mealType) !== null && _b !== void 0 ? _b : '';
    let name = '';
    if (mealTypeString === 'lunch')
        name = dateString + ' 점심 급식';
    else if (mealTypeString === 'dinner')
        name = dateString + ' 저녁 급식';
    if (dateString === '' && mealTypeString === '') {
        MealDB_1.default.MealModel.find({}).exec()
            .then((value) => {
            if (value)
                res.send(value);
            else
                res.send('No Meals');
            res.end();
        });
    }
    else {
        MealDB_1.default.MealModel.findOne({ name: name }).exec()
            .then((value) => {
            if (value)
                res.send(value);
            else
                res.send('Not found');
            res.end();
        });
    }
});
exports.default = { router };
//# sourceMappingURL=MealInfo.js.map