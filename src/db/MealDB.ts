import mongoose from 'mongoose'
const Schema = new mongoose.Schema({
	// img: {type: Buffer, required: true},
	name: {type: String, required: true, unique: true},
	date: {type: Date, required: true, default: Date.now},
	mealType: {type: String, required: true},
	menus: {type: [String]},
	snacks: {type: String}
})
const Model = mongoose.model('meal', Schema)
export default {Model}