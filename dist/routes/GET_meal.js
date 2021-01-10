"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealDB_1 = require("../db/MealDB/MealDB");
let router = express_1.Router();
router.route('/img/:year/:month/:date/:mealType')
    .get((req, res) => {
    var _a;
    const dateYear = Number(req.params.year);
    const dateMonth = Number(req.params.month);
    const dateDay = Number(req.params.date);
    let mealType = (_a = req.params.mealType) !== null && _a !== void 0 ? _a : '';
    MealDB_1.model.findOne({ dateYear, dateMonth, dateDay, mealType })
        .exec()
        .then((value) => {
        MealDB_1.gfs.openDownloadStreamByName(value.imgName).pipe(res);
    });
});
router.route('/img/:imgName')
    .get((req, res, next) => {
    const imgName = req.params.imgName;
    MealDB_1.gfs.find({ filename: imgName })
        .toArray((error, result) => {
        if (!result[0] || result.length === 0) { }
        else
            MealDB_1.gfs.openDownloadStreamByName(imgName).pipe(res);
    });
});
router.route('/meals/:year/:month')
    .get((req, res) => {
    if (req.params === undefined)
        return;
    const dateYear = Number(req.params.year);
    const dateMonth = Number(req.params.month);
    MealDB_1.model.find({ dateYear, dateMonth }).exec()
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