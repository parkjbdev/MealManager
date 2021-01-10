import express from "express";
import multer from "multer";
import dbInfo from "../auth/dbInfo.json";
import {model} from "../db/MealDB/MealDB";
import GridFsStorage from "multer-gridfs-storage";

let router = express.Router()

const storage = new GridFsStorage({
	url: dbInfo.mealDBConnectionString,
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			resolve({
				bucketName: 'mealImg'
			})
		})
	}
})
const upload = multer({storage})

router.route('/process/NewMeal')
	.post(upload.single('newMealImg'), (req, res) => {
		const newMeal = new model({
			name: req.body.newMealName,
			dateYear: req.body.newMealDateYear,
			dateMonth: req.body.newMealDateMonth,
			dateDay: req.body.newMealDateDay,
			mealType: req.body.mealType,
			menus: req.body.menu,
			snacks: req.body.snack,
			imgName: req.file.filename
		})
		newMeal.save()
			.then(value => {
				console.log('saved new meal')
				console.log(newMeal)
				res.status(200).json({
					success: true,
					value
				})
				res.redirect('/MealManager')
			})
			.catch(error => {
				if (error.code === 11000)
					console.log(error.code)
				else console.log(error)
			})

		// res.statusCode = 200
		// res.setHeader('Content-Type', 'text/html;charset=utf8')
		// res.redirect('/MealManager')
		// res.end()
	})

export default {router}