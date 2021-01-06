import {Router} from "express";
import MealModel, {IMeal} from '../db/MealDB'
import path from 'path'

let router = Router()

router.route('/img/:year/:month/:date/:mealType')
	.get((req, res) => {
		const year: number = Number(req.params.year)
		const month: number = Number(req.params.month)
		const date: number = Number(req.params.date)
		let mealType: string = req.params.mealType ?? ''

		if (mealType === 'lunch') mealType = '점심'
		else if (mealType === 'dinner') mealType = '저녁'

		MealModel.MealModel.findOne({dateYear: year, dateMonth: month, dateDay: date, mealType: mealType})
			.exec()
			.then((value: IMeal) => {
				let imgPath = path.resolve(__dirname, '..', '..', value.imgPath)
				res.sendFile(imgPath)
				return
			})
			.catch(() => {
				res.sendFile('https://www.dgateclassifieds.co.zw/wp-content/uploads/2020/09/no-image.png')
			})
	})

router.route('/meals/:year/:month')
	.get((req, res) => {
		if (req.params === undefined) return
		const year: number = Number(req.params.year)
		const month: number = Number(req.params.month)

		MealModel.MealModel.find({dateYear: year, dateMonth: month}).exec()
			.then((value: Document[]) => {
				if (value.length === 0) res.json({message: 'No Meals'})
				else res.json(value)
				res.end()
				return
			})
	})
//
// router.route('/')
// 	.get((req, res) => {
// 		let dateString = req.query.date ?? ''
// 		let mealTypeString = req.query.mealType ?? ''
//
// 		let name: string = ''
// 		if (mealTypeString === 'lunch') name = dateString + ' 점심 급식'
// 		else if (mealTypeString === 'dinner') name = dateString + ' 저녁 급식'
//
// 		if(dateString === '' && mealTypeString === '') {
// 			MealModel.MealModel.find({}).exec()
// 				.then((value: Document[]) => {
// 					if(value)	res.json(value)
// 					else res.json({message: 'No Meals'})
// 					res.end()
// 				})
// 		}
// 		else {
// 			MealModel.MealModel.findOne({name: name}).exec()
// 				.then((value: Document | null) => {
// 					if(value)	res.json(value)
// 					else res.json({message: 'Not found'})
// 					res.end()
// 				})
// 		}
// 	})

export default {router}