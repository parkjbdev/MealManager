"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const GET_meal_1 = __importDefault(require("./routes/GET_meal"));
const POST_meal_1 = __importDefault(require("./routes/POST_meal"));
const DELETE_meal_1 = __importDefault(require("./routes/DELETE_meal"));
const express_session_1 = __importDefault(require("express-session"));
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
app.use('/MealManager/uploads', express_1.default.static(path_1.default.resolve(__dirname, '../uploads')));
app.use(express_session_1.default({
    cookie: undefined,
    name: "",
    proxy: false,
    rolling: false,
    saveUninitialized: false,
    secret: 'dog',
    store: undefined,
    unset: undefined,
    genid(req) {
        return "";
    },
    resave: false
}));
app.use(express_1.default.static('public'));
// routers
app.use('/MealManager', GET_meal_1.default.router);
app.use('/MealManager', POST_meal_1.default.router);
app.use('/MealManager', DELETE_meal_1.default.router);
// 404 error handling
app.use((req, res, next) => {
    res.status(404).sendFile(path_1.default.join(__dirname, '../public/404.html'));
});
// Start Server
app.listen(app.get('port'), () => {
    console.log('listening');
});
//# sourceMappingURL=index.js.map