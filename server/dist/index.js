"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const GET_meal_1 = __importDefault(require("./routes/GET_meal"));
const POST_meal_1 = __importDefault(require("./routes/POST_meal"));
const DELETE_meal_1 = __importDefault(require("./routes/DELETE_meal"));
let app = express_1.default();
app.set('port', process.env.PORT || 3000);
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default());
// Logger
app.use('/', (req, res, next) => {
    console.log(req.ip, ':', req.method, req.originalUrl);
    next();
});
// view static html page
app.use('/uploads', express_1.default.static(path_1.default.resolve(__dirname, '../uploads')));
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
// Set FrontEnd page
app.use(express_1.default.static('public')); // vanillaJS
// app.use(express.static('../client/build')) // React
// routers
app.use(GET_meal_1.default.router);
app.use(POST_meal_1.default.router);
app.use(DELETE_meal_1.default.router);
// 404 error handling
app.use((req, res, next) => {
    res.status(404).sendFile(path_1.default.join(__dirname, '../public/404.html'));
});
// Start Server
app.listen(app.get('port'), () => {
    console.log('listening');
});
