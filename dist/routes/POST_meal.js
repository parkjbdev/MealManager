"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const MealDB_1 = __importDefault(require("../db/MealDB"));
let router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination(req, file, callback) {
        const path = `./uploads/${req.body.newMealDateYear}/${req.body.newMealDateMonth}`;
        fs_1.default.mkdirSync(path, { recursive: true });
        callback(null, path);
    },
    filename(req, file, callback) {
        callback(null, `${req.body.newMealName}사진${path_1.default.extname(file.originalname)}`);
    }
});
const upload = multer_1.default({ storage: storage });
router.route('/process/NewMeal')
    .post(upload.single('newMealImg'), (req, res) => {
    const newMeal = new MealDB_1.default.MealModel({
        name: req.body.newMealName,
        dateYear: req.body.newMealDateYear,
        dateMonth: req.body.newMealDateMonth,
        dateDay: req.body.newMealDateDay,
        mealType: req.body.mealType,
        menus: req.body.menu,
        snacks: req.body.snack,
        imgName: req.file.filename,
        imgPath: req.file.path
    });
    newMeal.save().then(() => {
        console.log('saved new meal');
        console.log(newMeal);
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    res.redirect('/MealManager');
    res.end();
});
exports.default = { router };
//# sourceMappingURL=POST_meal.js.map