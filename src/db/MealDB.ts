import mongoose from 'mongoose'
import dbInfo from "../../auth/dbInfo.json";
import MealSchema from "./schema/MealSchema";
import Meal from "../interface/Meal";

// mongoDB Connection
const conn
	= mongoose.createConnection(dbInfo.mealDBConnectionString, {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true})
conn.once('open', () => console.log('connected to db server', conn.host))
conn.once('error', error => console.error.bind(console, error))

const model = conn.model<Meal>('meal', MealSchema)

export default model