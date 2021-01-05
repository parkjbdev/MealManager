import {Router} from "express";
import MealModel from '../db/MealDB'

let router = Router()

router.route('/:year/:month')
	.get((req, res) => {
		if(req.params === undefined)	return
		const year: number = Number(req.params.year)
		const month: number = Number(req.params.month)

		MealModel.MealModel.find({dateYear: year, dateMonth: month}).exec()
			.then((value: Document[]) => {
				if(value.length === 0)	res.send('No Meals')
				else	res.send(value)
				res.end()
			})
	})

router.route('/')
	.get((req, res) => {
		let dateString = req.query.date ?? ''
		let mealTypeString = req.query.mealType ?? ''

		let name: string = ''
		if (mealTypeString === 'lunch') name = dateString + ' 점심 급식'
		else if (mealTypeString === 'dinner') name = dateString + ' 저녁 급식'

		if(dateString === '' && mealTypeString === '') {
			MealModel.MealModel.find({}).exec()
				.then((value: Document[]) => {
					if(value)	res.send(value)
					else res.send('No Meals')
					res.end()
				})
		}
		else {
			MealModel.MealModel.findOne({name: name}).exec()
				.then((value: Document | null) => {
					if(value)	res.send(value)
					else res.send('Not found')
					res.end()
				})
		}
	})

export default {router}