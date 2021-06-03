import {Router} from "express";
import MealDB from '../db/MealDB'

const router = Router()
router.route('/meals/:year/:month/').get((req, res) => {
	if (req.params === undefined) return
	const dateYear: number = Number(req.params.year)
	const dateMonth: number = Number(req.params.month)

	MealDB.find({dateYear, dateMonth})
		.sort({dateDay: 1, mealType: -1})
		.exec()
		.then((value) => {
			res.json(value)
			res.end()
			return
		})
	//	TODO catch error: no such file
})

export default {router}