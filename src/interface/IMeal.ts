import mongoose from "mongoose";

export interface IMeal extends mongoose.Document {
	name: string,
	dateYear: number,
	dateMonth: number,
	dateDay: number,
	mealType: string,
	menus: string[],
	snacks: string[],
	imgName: string
}