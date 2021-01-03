import path from 'path'
import express from 'express'
import serve_static from 'serve-static'
import fs from 'fs'

let app = express()

app.set('port', process.env.PORT || 3000)

// parsers
app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

// view static html page
// app.use('/MealManager', serve_static(path.join(__dirname, '../public/MealManager')))
app.use('/', serve_static(path.join(__dirname, '../public')))

import multer from "multer";
const storage = multer.diskStorage({
	destination(req, file, callback) {
		const path = `./uploads/${req.body.newMealFolderName}/`
		fs.mkdirSync(path, {recursive: true})
		callback(null, path)
	},
	filename(req, file, callback) {
		callback(null, `${req.body.newMealName}사진.${path.extname(file.originalname)}`);
	}
})
const upload = multer({storage: storage})

// when posted from html
app.post('/process/NewMeal', upload.single('newMealImg'), (req, res) => {
	const newMeal = new MealDB.Model({
		imgInfo: req.file,
		name: req.body.newMealName,
		date: req.body.newMealDate,
		mealType: req.body.mealType,
		menus: req.body.menu,
		snacks: 'snack'
	})
	newMeal.save().then(() => console.log('Success saving', req.body))

	res.statusCode = 200
	res.setHeader('Content-Type', 'text/html;charset=utf8')
	res.redirect('/MealManager')
	res.end()
})

app.listen(app.get('port'), () => {
	console.log('listening')
})

import dbInfo from './auth/dbAccessKey.json'
import mongoose from 'mongoose'
import MealDB from './db/MealDB'

mongoose.connect(dbInfo.connectionString + 'mealDB', {useNewUrlParser: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.on('error', console.error.bind(console, 'connection error'))
connection.once('open', () => console.log('connected to db server:', connection.host))