import {Document} from "mongoose";

export interface Meal extends Document {
	name: string,
	dateYear: number,
	dateMonth: number,
	dateDay: number,
	mealType: string,
	menus: string[],
	snacks: string[],
	imgName: string,
	imgPath: string
}

export default Meal