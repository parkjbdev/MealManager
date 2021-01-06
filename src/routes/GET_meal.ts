import {Router} from "express";
import MealModel from '../db/MealDB'
import path from 'path'
import {IMeal} from "../interface/IMeal";

let router = Router()

router.route('/img/:year/:month/:date/:mealType')
	.get((req, res) => {
		const dateYear: number = Number(req.params.year)
		const dateMonth: number = Number(req.params.month)
		const dateDay: number = Number(req.params.date)
		let mealType: string = req.params.mealType ?? ''

		MealModel.MealModel.findOne({dateYear, dateMonth, dateDay, mealType})
			.exec()
			.then((value: IMeal) => {
				let imgPath = path.resolve(__dirname, '..', '..', value.imgPath)
				res.sendFile(imgPath)
				return
			})
	//	TODO catch error: no such file
	})

router.route('/meals/:year/:month')
	.get((req, res) => {
		if (req.params === undefined) return
		const dateYear: number = Number(req.params.year)
		const dateMonth: number = Number(req.params.month)

		MealModel.MealModel.find({dateYear, dateMonth}).exec()
			.then((value: Document[]) => {
				if (value.length === 0) res.json({message: 'No Meals'})
				else res.json(value)
				res.end()
				return
			})
		//	TODO catch error: no such file
	})

export default {router}