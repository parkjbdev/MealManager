"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const dbInfo_json_1 = __importDefault(require("../auth/dbInfo.json"));
const MealDB_1 = require("../db/MealDB/MealDB");
const multer_gridfs_storage_1 = __importDefault(require("multer-gridfs-storage"));
let router = express_1.default.Router();
const storage = new multer_gridfs_storage_1.default({
    url: dbInfo_json_1.default.mealDBConnectionString,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            resolve({
                bucketName: 'mealImg'
            });
        });
    }
});
const upload = multer_1.default({ storage });
router.route('/process/NewMeal')
    .post(upload.single('newMealImg'), (req, res) => {
    const newMeal = new MealDB_1.model({
        name: req.body.newMealName,
        dateYear: req.body.newMealDateYear,
        dateMonth: req.body.newMealDateMonth,
        dateDay: req.body.newMealDateDay,
        mealType: req.body.mealType,
        menus: req.body.menu,
        snacks: req.body.snack,
        imgName: req.file.filename
    });
    newMeal.save()
        .then(value => {
        console.log('saved new meal');
        console.log(newMeal);
        res.status(200).json({
            success: true,
            value
        });
        res.redirect('/MealManager');
    })
        .catch(error => {
        if (error.code === 11000)
            console.log(error.code);
        else
            console.log(error);
    });
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html;charset=utf8')
    // res.redirect('/MealManager')
    // res.end()
});
exports.default = { router };
//# sourceMappingURL=POST_meal.js.map