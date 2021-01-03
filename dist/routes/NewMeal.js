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
        console.log(req.body);
        const path = `./uploads/${req.body.newMealDateYYYY}/${req.body.newMealDateMM}`;
        fs_1.default.mkdirSync(path, { recursive: true });
        callback(null, path);
    },
    filename(req, file, callback) {
        callback(null, `${req.body.newMealName}사진.${path_1.default.extname(file.originalname)}`);
    }
});
const upload = multer_1.default({ storage: storage });
router.route('/process/NewMeal')
    .post(upload.single('newMealImg'), (req, res) => {
    const newMeal = new MealDB_1.default.Model({
        imgInfo: req.file,
        name: req.body.newMealName,
        date: req.body.newMealDate,
        mealType: req.body.mealType,
        menus: req.body.menu,
        snacks: 'snack'
    });
    newMeal.save().then(() => console.log('Success saving', req.body));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    res.send(req.body);
    // res.redirect('/MealManager')
    res.end();
});
exports.default = { router };
//# sourceMappingURL=NewMeal.js.map