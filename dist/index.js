"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const serve_static_1 = __importDefault(require("serve-static"));
const dbAccessKey_json_1 = __importDefault(require("./auth/dbAccessKey.json"));
const mongoose_1 = __importDefault(require("mongoose"));
const MealInfo_1 = __importDefault(require("./routes/MealInfo"));
const NewMeal_1 = __importDefault(require("./routes/NewMeal"));
let app = express_1.default();
app.set('port', process.env.PORT || 3000);
// parsers
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// view static html page
// app.use('/', serve_static(path.join(__dirname, '../public')))
app.use('/MealManager', serve_static_1.default(path_1.default.join(__dirname, '../public/MealManager')));
// routers
app.use('/MealInfo', MealInfo_1.default.router);
app.use('/MealManager', NewMeal_1.default.router);
app.listen(app.get('port'), () => {
    console.log('listening');
});
// mongoDB Connection
mongoose_1.default.connect(dbAccessKey_json_1.default.connectionString + 'mealDB', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose_1.default.connection;
connection.on('error', console.error.bind(console, 'connection error'));
connection.once('open', () => console.log('connected to db server:', connection.host));
//# sourceMappingURL=index.js.map