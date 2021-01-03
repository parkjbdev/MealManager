"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealDB_1 = __importDefault(require("../db/MealDB"));
let router = express_1.Router();
// router.route('/:year/:month')
// 	.get((req, res) => {
// 		if(req.params === undefined)	return
// 		const year: number = Number(req.params.year)
// 		const month: number = Number(req.params.month)
// 		const date = new Date(year, month)
//
//
// 	})
router.route('/')
    .get((req, res) => {
    // console.log(req.query)
    let dateString = req.query.date;
    let mealTypeString = req.query.mealType;
    let name;
    if (mealTypeString === 'lunch')
        name = dateString + ' 점심 급식';
    else if (mealTypeString === 'dinner')
        name = dateString + ' 저녁 급식';
    else
        return;
    // TODO: not works damnnn
    res.send(MealDB_1.default.Model.find({ name: name }));
    res.end();
});
router.route('/:year/:month/:date/')
    .get((req, res) => {
    if (req.params === undefined)
        return;
    const year = Number(req.params.year);
    const month = Number(req.params.month);
    const day = Number(req.params.date);
    const mealType = req.query.mealType;
    console.log(year, month, day, mealType);
    let name;
    // if(mealType === 'lunch')	name = year + month + day + ' 점심 급식'
    // else if(mealType === 'dinner')	name = year + month + day + ' 저녁 급식'
    // else name = year.toString() + month.toString() + day.toString()
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month - 1);
    date.setDate(day);
    // MealModel.Model.findOne({name: })
    // MealDB.findOne
    res.writeHead(200, { 'Content-Type': 'text/html;charset==utf8' });
    // res.write()
    res.end();
});
exports.default = { router };
//# sourceMappingURL=MealInfo.js.map