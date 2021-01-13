import mongoose from "mongoose";
import {Meal} from "../../../interface/Meal";

const schema: mongoose.Schema<Meal> = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
	dateYear: {type: Number, required: true},
	dateMonth: {type: Number, required: true},
	dateDay: {type: Number, required: true},
	mealType: {type: String, required: true},
	menus: {type: [String]},
	snacks: {type: [String]},
	imgName: {type: String, required: true}
})

export default schema