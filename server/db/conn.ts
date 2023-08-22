import mongoose, { mongo } from "mongoose";
require('dotenv').config()

const uri = `mongodb+srv://${process.env.USER_MONGO}:${process.env.PASS_MONGO}@diepcluster.91ts5pm.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri).then(()=>{
  console.log("MongoDB conectado ao mongoose")
})

export default mongoose