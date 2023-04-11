const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

apiFootballController = require('./controllers/apiFootballController')

app.get("/api/matches", apiFootballController.getMatches)

app.listen(5000, () => { console.log("server started on port 5000") })