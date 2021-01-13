"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GET_meal_1 = __importDefault(require("./routes/GET_meal"));
const POST_meal_1 = __importDefault(require("./routes/POST_meal"));
let app = express_1.default();
app.set('port', process.env.PORT || 3000);
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Logger
app.use('/', (req, res, next) => {
    console.log(req.ip, ':', req.method, req.originalUrl);
    next();
});
// view static html page
app.use(express_1.default.static('public'));
// routers
app.use('/MealManager', GET_meal_1.default.router);
app.use('/MealManager', POST_meal_1.default.router);
// Start Server
app.listen(app.get('port'), () => {
    console.log('listening');
});
//# sourceMappingURL=app.js.map