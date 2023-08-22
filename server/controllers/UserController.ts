const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

export default class ClientController {
    static async login(req:any, res:any) {
        const {email, senha} = req.body
    }
}