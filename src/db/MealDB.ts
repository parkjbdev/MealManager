import mongoose from 'mongoose'
import dbInfo from "../auth/dbAccessKey.json";

// mongoDB Connection
mongoose
	.connect(dbInfo.connectionString + 'mealDB', {useNewUrlParser: true, useUnifiedTopology: true})
	.then(value => console.log('connected to db server', value.connection.host))
	.catch(error => console.error.bind(console, 'connection error'))

export interface IMeal extends mongoose.Document {
	imgPath: string,
	name: string,
	date: Date,
	mealType: string,
	menus: string[],
	snacks: string[]
}

const MealSchema: mongoose.Schema<IMeal> = new mongoose.Schema({
	imgPath: {type: String, required: true, unique: true},
	name: {type: String, required: true, unique: true},
	date: {type: Date, required: true, default: Date.now},
	dateYear: {type: Number, required: true},
	dateMonth: {type: Number, required: true},
	dateDay: {type: Number, required: true},
	mealType: {type: String, required: true},
	menus: {type: [String]},
	snacks: {type: [String]}
})
const MealModel = mongoose.model('meal', MealSchema)

export default {MealModel}