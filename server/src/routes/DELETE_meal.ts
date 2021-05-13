import {Router} from "express";
import MealDB from '../db/MealDB'
import fs from "fs";

const router = Router()
router.route('/:mealId')
	.delete((req, res) => {
		const _id = req.params.mealId
		MealDB.findByIdAndDelete(_id)
			.exec()
			.then((value) => {
				if (value === null) return console.log('error')
				const path = value.imgPath
				fs.access(path, fs.constants.F_OK, (err) => {
					if (err) return console.log('Cannot Delete File')
					fs.unlink(path, (err) => err ?
						console.log(err) : console.log(`${path} deleted successfully`))
				})
			})
	})

export default {router}
