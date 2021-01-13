import {Router} from "express";

import multer from "multer";
import fs from "fs";
import path from "path";

import MealDB from '../db/MealDB'

let router = Router()
const storage = multer.diskStorage({
	destination(req, file, callback) {
		const path = `./uploads/${req.body.newMealDateYear}/${req.body.newMealDateMonth}`
		fs.mkdirSync(path, {recursive: true})
		callback(null, path)
	},
	filename(req, file, callback) {
		const filename = `${req.body.newMealName}사진${path.extname(file.originalname)}`
		callback(null, filename);
	}
})
const upload = multer({storage})

router.route('/process/NewMeal')
	.post(upload.single('newMealImg'), (req, res) => {
		const newMeal = new MealDB({
			name: req.body.newMealName,
			dateYear: req.body.newMealDateYear,
			dateMonth: req.body.newMealDateMonth,
			dateDay: req.body.newMealDateDay,
			mealType: req.body.mealType,
			menus: req.body.menu,
			snacks: req.body.snack,
			imgName: req.file.filename,
			imgPath: req.file.path
		})
		newMeal.save()
			.then(() => {
				res.statusCode = 200
				console.log('saved new meal')
				console.log(newMeal)
			})
			.catch(error => {
				console.log('error occurred:', error.code)
			})
			.finally(() => {
				res.redirect('/MealManager')
			})
	})

export default {router}