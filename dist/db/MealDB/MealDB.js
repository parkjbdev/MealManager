"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = exports.gfs = exports.conn = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MealSchema_1 = __importDefault(require("./schema/MealSchema"));
const dbInfo_json_1 = __importDefault(require("../../auth/dbInfo.json"));
// mongoDB Connection
exports.conn = mongoose_1.default.createConnection(dbInfo_json_1.default.mealDBConnectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
exports.conn.once("open", () => {
    console.log('connected to db server', exports.conn.host);
    exports.gfs = new mongoose_1.default.mongo.GridFSBucket(exports.conn.db, {
        bucketName: 'mealImg'
    });
});
exports.conn.once("error", error => {
    console.error.bind(console, error);
});
exports.model = exports.conn.model("meal", MealSchema_1.default);
//# sourceMappingURL=MealDB.js.map