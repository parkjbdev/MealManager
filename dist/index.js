"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const serve_static_1 = __importDefault(require("serve-static"));
let app = express_1.default();
app.set('port', process.env.PORT || 3000);
// parsers
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// view static html page
// app.use('/MealManager', serve_static(path.join(__dirname, '../public/MealManager')))
app.use('/', serve_static_1.default(path_1.default.join(__dirname, '../public')));
// when posted from html
app.post('/process/NewMeal', (req, res) => {
    console.log(req.body);
    const newMeal = new MealDB_1.default.Model({
        // img: req.body.newMealImg,
        name: req.body.newMealName,
        date: req.body.newMealDate,
        mealType: req.body.mealType,
        menus: req.body.menu,
        snacks: 'snack'
    });
    newMeal.save().then(() => console.log('Success'));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    res.redirect('/MealManager');
    res.end();
});
app.listen(app.get('port'), () => {
    console.log('listening');
});
const dbAccessKey_json_1 = __importDefault(require("./auth/dbAccessKey.json"));
const mongoose_1 = __importDefault(require("mongoose"));
const MealDB_1 = __importDefault(require("./db/MealDB"));
mongoose_1.default.connect(dbAccessKey_json_1.default.connectionString + 'mealDB', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose_1.default.connection;
connection.on('error', console.error.bind(console, 'connection error'));
connection.once('open', () => console.log('connected to db server:', connection.host));
//# sourceMappingURL=index.js.map