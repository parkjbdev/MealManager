import {Router} from "express";

import MealDB from '../db/MealDB'

const router = Router()
router.route('/:mealId')
	.delete((req, res) => {
		const _id = req.params.mealId
		MealDB.findByIdAndDelete(_id, {}, () => {

		})
	})

export default {router}