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
    const year = Number(req.params.year);
    const month = Number(req.params.month);
    const date = Number(req.params.date);
    let mealType = (_a = req.params.mealType) !== null && _a !== void 0 ? _a : '';
    if (mealType === 'lunch')
        mealType = '점심';
    else if (mealType === 'dinner')
        mealType = '저녁';
    MealDB_1.default.MealModel.findOne({ dateYear: year, dateMonth: month, dateDay: date, mealType: mealType })
        .exec()
        .then((value) => {
        let imgPath = path_1.default.resolve(__dirname, '..', '..', value.imgPath);
        res.sendFile(imgPath);
        return;
    })
        .catch(() => {
        res.sendFile('https://www.dgateclassifieds.co.zw/wp-content/uploads/2020/09/no-image.png');
    });
});
router.route('/meals/:year/:month')
    .get((req, res) => {
    if (req.params === undefined)
        return;
    const year = Number(req.params.year);
    const month = Number(req.params.month);
    MealDB_1.default.MealModel.find({ dateYear: year, dateMonth: month }).exec()
        .then((value) => {
        if (value.length === 0)
            res.json({ message: 'No Meals' });
        else
            res.json(value);
        res.end();
        return;
    });
});
//
// router.route('/')
// 	.get((req, res) => {
// 		let dateString = req.query.date ?? ''
// 		let mealTypeString = req.query.mealType ?? ''
//
// 		let name: string = ''
// 		if (mealTypeString === 'lunch') name = dateString + ' 점심 급식'
// 		else if (mealTypeString === 'dinner') name = dateString + ' 저녁 급식'
//
// 		if(dateString === '' && mealTypeString === '') {
// 			MealModel.MealModel.find({}).exec()
// 				.then((value: Document[]) => {
// 					if(value)	res.json(value)
// 					else res.json({message: 'No Meals'})
// 					res.end()
// 				})
// 		}
// 		else {
// 			MealModel.MealModel.findOne({name: name}).exec()
// 				.then((value: Document | null) => {
// 					if(value)	res.json(value)
// 					else res.json({message: 'Not found'})
// 					res.end()
// 				})
// 		}
// 	})
exports.default = { router };
//# sourceMappingURL=GET_meal.js.map