import mongoose from 'mongoose'
import {GridFSBucket} from "mongodb";
import MealSchema from "./schema/MealSchema";
import dbInfo from "../../auth/dbInfo.json";

// mongoDB Connection
export const conn
	= mongoose.createConnection(dbInfo.mealDBConnectionString, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

export let gfs: GridFSBucket;
conn.once("open", () => {
	console.log('connected to db server', conn.host)
	gfs = new mongoose.mongo.GridFSBucket(conn.db, {
		bucketName: 'mealImg'
	})
})

conn.once("error", error => {
	console.error.bind(console, error)
})

export const model = conn.model("meal", MealSchema)