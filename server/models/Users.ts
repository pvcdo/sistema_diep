import mongoose from "../db/conn";

const {Schema} = mongoose

const User = mongoose.model(
  'Users',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    phone: {
      type: Number,
    },
    address:{
      type: String,
      required: true,
    },
    specialized:{
      type: String
    },
    reminders:{
      type: [Object]
    }

  }, {timestamps: true}),
)

export default User