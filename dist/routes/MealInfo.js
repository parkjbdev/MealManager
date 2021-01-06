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
        console.log(value.imgPath);
        let imgPath = path_1.default.join(__dirname, '..', '..', value.imgPath);
        console.log(imgPath);
        res.sendFile(imgPath);
        return;
    })
        .catch(() => {
        res.sendFile('http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1');
    });
});
//
// router.route('/img/:imgPath')
// 	.get((req, res) => {
// 		console.log('ok')
// 		const imgPath = path.join(__dirname,'..','..', 'uploads', req.params.imgPath ?? '')
// 		res.sendFile(imgPath)
// 	})
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
//# sourceMappingURL=MealInfo.js.map