import mongoose from 'mongoose'
import dbInfo from "../auth/dbAccessKey.json";
import {IMeal} from "../interface/IMeal";

// mongoDB Connection
mongoose
	.connect(dbInfo.connectionString + 'mealDB', {useNewUrlParser: true, useUnifiedTopology: true})
	.then(value => console.log('connected to db server', value.connection.host))
	.catch(error => console.error.bind(console, 'connection error'))

const MealSchema: mongoose.Schema<IMeal> = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
	dateYear: {type: Number, required: true},
	dateMonth: {type: Number, required: true},
	dateDay: {type: Number, required: true},
	mealType: {type: String, required: true},
	menus: {type: [String]},
	snacks: {type: [String]},
	imgName: {type: String, required: true},
	imgPath: {type: String, required: true}
})
const MealModel = mongoose.model('meal', MealSchema)

export default {MealModel}