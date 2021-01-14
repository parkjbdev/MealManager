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
		console.log(req.body)
		newMeal.save()
			.then(() => {
				res.statusCode = 200
				console.log('saved new meal')
				console.log(newMeal)
				res.json({"status": res.statusCode, "message": "식단을 성공적으로 추가했습니다"})
			})
			.catch(error => {
				console.log('error occurred:', error.code)
				if(error.code === 11000) res.json({"status": error.code, "message": "같은 날의 식단이 이미 존재합니다"})
				else res.json({"status": error.code, "message": "unknown error"})
			})
			.finally(() => {
			})
	})

export default {router}