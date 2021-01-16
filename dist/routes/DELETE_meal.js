"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealDB_1 = __importDefault(require("../db/MealDB"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.Router();
router.route('/:mealId')
    .delete((req, res) => {
    const _id = req.params.mealId;
    MealDB_1.default.findByIdAndDelete(_id)
        .exec()
        .then((value) => {
        const path = value.imgPath;
        fs_1.default.access(path, fs_1.default.constants.F_OK, (err) => {
            if (err)
                return console.log('Cannot Delete File');
            fs_1.default.unlink(path, (err) => err ?
                console.log(err) : console.log(`${path} deleted successfully`));
        });
    })
        .finally();
});
exports.default = { router };
//# sourceMappingURL=DELETE_meal.js.map