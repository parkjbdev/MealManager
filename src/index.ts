import path from 'path'
import express from 'express'
import serve_static from 'serve-static'

import MealInfo from './routes/MealInfo'
import NewMeal from './routes/NewMeal'

let app = express()

app.set('port', process.env.PORT || 3000)

// parsers
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// view static html page
app.use('/', serve_static(path.join(__dirname, '../public')))

// routers
app.use('/MealInfo', MealInfo.router)
app.use('/MealManager', NewMeal.router)

app.listen(app.get('port'), () => {
	console.log('listening')
})