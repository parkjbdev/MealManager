import mongoose from 'mongoose'
const MealSchema = new mongoose.Schema({
//	img
	name: {type: String, required: true, unique: true},
	date: {type: Date, required: true},
	mealType: {type: String, required: true},
	menus: {type: String},
	snacks: {type: String}
})
export {MealSchema}