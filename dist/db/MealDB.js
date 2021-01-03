"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    // img: {type: Buffer, required: true},
    imgInfo: { type: mongoose_1.default.Schema.Types.Mixed, required: true },
    name: { type: String, required: true, unique: true },
    date: { type: Date, required: true, default: Date.now },
    mealType: { type: String, required: true },
    menus: { type: [String] },
    snacks: { type: String }
});
// Schema.static('findByName', function(name: string)  {
// 	return this.find({name})
// })
const Model = mongoose_1.default.model('meal', Schema);
exports.default = { Model };
//# sourceMappingURL=MealDB.js.map