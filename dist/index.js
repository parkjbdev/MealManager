"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const serve_static_1 = __importDefault(require("serve-static"));
const GET_meal_1 = __importDefault(require("./routes/GET_meal"));
const POST_meal_1 = __importDefault(require("./routes/POST_meal"));
let app = express_1.default();
app.set('port', process.env.PORT || 3000);
// parsers
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// view static html page
app.use('/', serve_static_1.default(path_1.default.join(__dirname, '../public')));
// routers
app.use('/MealManager', GET_meal_1.default.router);
app.use('/MealManager', POST_meal_1.default.router);
app.listen(app.get('port'), () => {
    console.log('listening');
});
//# sourceMappingURL=index.js.map