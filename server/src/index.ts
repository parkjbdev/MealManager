import path from 'path'
import express from 'express'
import session from "express-session";
import cors from 'cors'

import getMeal from './routes/GET_meal'
import postMeal from './routes/POST_meal'
import deleteMeal from './routes/DELETE_meal'

let app = express()

app.set('port', process.env.PORT || 3000)

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

// Logger
app.use('/', (req, res, next) => {
	console.log(req.ip,':', req.method, req.originalUrl)
	next()
})

// view static html page
app.use('/uploads', express.static(path.resolve(__dirname, '../uploads')))
app.use(session({
	cookie: undefined,
	name: "",
	proxy: false,
	rolling: false,
	saveUninitialized: false,
	secret: 'dog',
	store: undefined,
	unset: undefined,
	genid(req: express.Request): string {
		return "";
	},
	resave: false
}))

// Set FrontEnd page
app.use(express.static('public')) // vanillaJS
// app.use(express.static('../client/build')) // React

// routers
app.use(getMeal.router)
app.use(postMeal.router)
app.use(deleteMeal.router)

// 404 error handling
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, '../public/404.html'))
})

// Start Server
app.listen(app.get('port'), () => {
	console.log('listening')
})