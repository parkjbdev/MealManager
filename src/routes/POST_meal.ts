import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import MealDB from "../db/MealDB";

let router = express.Router()
const storage = multer.diskStorage({
	destination(req, file, callback) {
		const path = `./uploads/${req.body.newMealDateYear}/${req.body.newMealDateMonth}`
		fs.mkdirSync(path, {recursive: true})
		callback(null, path)
	},
	filename(req, file, callback) {
		callback(null, `${req.body.newMealName}사진${path.extname(file.originalname)}`);
	}
})
const upload = multer({storage: storage})

router.route('/process/NewMeal')
	.post(upload.single('newMealImg'), (req, res) => {
		const newMeal = new MealDB.MealModel({
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
		newMeal.save().then(() => {
			console.log('saved new meal')
			console.log(newMeal)
		})

		res.statusCode = 200
		res.setHeader('Content-Type', 'text/html;charset=utf8')
		res.redirect('/MealManager')
		res.end()
	})

export default {router}