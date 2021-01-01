import mongoose from "mongoose";
import {MealSchema} from './MealSchema'

let MealModel = mongoose.model('meal', MealSchema)
export {MealModel}