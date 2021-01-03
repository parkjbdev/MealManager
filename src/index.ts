import path from 'path'
import express from 'express'
import serve_static from 'serve-static'
import fs from 'fs'
import multer from "multer";
import dbInfo from './auth/dbAccessKey.json'
import mongoose from 'mongoose'
import MealDB from './db/MealDB'
import MealInfo from './routes/MealInfo'
import NewMeal from './routes/NewMeal'

let app = express()

app.set('port', process.env.PORT || 3000)

// parsers
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// view static html page
// app.use('/', serve_static(path.join(__dirname, '../public')))
app.use('/MealManager', serve_static(path.join(__dirname, '../public/MealManager')))

// routers
app.use('/MealInfo', MealInfo.router)
app.use('/MealManager', NewMeal.router)

app.listen(app.get('port'), () => {
	console.log('listening')
})

// mongoDB Connection
mongoose.connect(dbInfo.connectionString + 'mealDB', {useNewUrlParser: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.on('error', console.error.bind(console, 'connection error'))
connection.once('open', () => console.log('connected to db server:', connection.host))