import express from "express";
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(express.static('public'))

app.use('/users',require('./routes/UserRoutes'))

app.listen(5000, () => {
  console.log("Escutando na porta 5000")
})
