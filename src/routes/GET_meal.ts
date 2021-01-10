import {Router} from "express";
import {gfs, model} from '../db/MealDB/MealDB'
import {IMeal} from "../interface/IMeal";

let router = Router()

router.route('/img/:year/:month/:date/:mealType')
	.get((req, res) => {
		const dateYear: number = Number(req.params.year)
		const dateMonth: number = Number(req.params.month)
		const dateDay: number = Number(req.params.date)
		let mealType: string = req.params.mealType ?? ''

		model.findOne({dateYear, dateMonth, dateDay, mealType})
			.exec()
			.then((value: IMeal) => {
				gfs.openDownloadStreamByName(value.imgName).pipe(res)
			})
	})

router.route('/img/:imgName')
	.get((req, res, next) => {
		const imgName:string = req.params.imgName!
		gfs.find({filename: imgName})
			.toArray((error, result) => {
				if(!result[0] || result.length === 0){}
				else gfs.openDownloadStreamByName(imgName).pipe(res)
			})
	})

router.route('/meals/:year/:month')
	.get((req, res) => {
		if (req.params === undefined) return
		const dateYear: number = Number(req.params.year)
		const dateMonth: number = Number(req.params.month)

		model.find({dateYear, dateMonth}).exec()
			.then((value: Document[]) => {
				if (value.length === 0) res.json({message: 'No Meals'})
				else res.json(value)
				res.end()
				return
			})
		//	TODO catch error: no such file
	})

export default {router}