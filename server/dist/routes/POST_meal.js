"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealDB_1 = __importDefault(require("../db/MealDB"));
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const router = express_1.Router();
const storage = multer_1.default.diskStorage({
    destination(req, file, callback) {
        const path = `./uploads/${req.body.mealDateYear}/${req.body.mealDateMonth}`;
        fs_1.default.mkdirSync(path, { recursive: true });
        callback(null, path);
    },
    filename(req, file, callback) {
        const filename = `${req.body.mealName}사진${path_1.default.extname(file.originalname)}`;
        callback(null, filename);
    }
});
const upload = multer_1.default({ storage });
router.route('/process/NewMeal').post(upload.single('mealImg'), (req, res) => {
    const newMeal = new MealDB_1.default({
        name: req.body.mealName,
        dateYear: req.body.mealDateYear,
        dateMonth: req.body.mealDateMonth,
        dateDay: req.body.mealDateDay,
        mealType: req.body.mealType,
        menus: req.body.menu,
        snacks: req.body.snack,
        imgName: req.file.filename,
        imgPath: req.file.path
    });
    console.log(req.body);
    newMeal.save()
        .then(() => {
        res.statusCode = 200;
        console.log('saved new meal');
        console.log(newMeal);
        res.json({ "status": res.statusCode, "message": "식단을 성공적으로 추가했습니다" });
    })
        .catch((error) => {
        console.log('error occurred:', error.code);
        if (error.code === 11000)
            res.json({ "status": error.code, "message": "같은 날의 식단이 이미 존재합니다" });
        else
            res.json({ "status": error.code, "message": "unknown error" });
    })
        .finally(() => {
    });
});
exports.default = { router };
