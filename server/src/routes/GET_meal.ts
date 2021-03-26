import {Router} from "express";
import MealDB from '../db/MealDB'

let router = Router()

router.route('/meals/:year/:month/')
	.get((req, res) => {
		if (req.params === undefined) return
		const dateYear: number = Number(req.params.year)
		const dateMonth: number = Number(req.params.month)

		MealDB.find({dateYear, dateMonth})
			.sort({dateDay: 1, mealType: -1})
			.exec()
			.then((value: Document[]) => {
				if (value.length === 0) res.json({message: `${dateYear}년 ${dateMonth}월 식단을 추가하십시오`})
				else res.json(value)
				res.end()
				return
			})
		//	TODO catch error: no such file
	})

export default {router}