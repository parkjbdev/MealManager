import path from 'path'
import express from 'express'
import serve_static from 'serve-static'

import getMeal from './routes/GET_meal'
import postMeal from './routes/POST_meal'
import deleteMeal from './routes/DELETE_meal'

let app = express()

app.set('port', process.env.PORT || 3000)

// parsers
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// view static html page
app.use('/', serve_static(path.join(__dirname, '../public')))
app.use('/MealManager/uploads', serve_static(path.join(__dirname, '../uploads')))

// routers
app.use('/MealManager', getMeal.router)
app.use('/MealManager', postMeal.router)
app.use('/MealManager', deleteMeal.router)

app.listen(app.get('port'), () => {
	console.log('listening')
})