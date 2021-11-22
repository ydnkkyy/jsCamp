import UserService from "../services/userService.js"
import User from "../models/user.js"
import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import { users } from "../data/users.js"


console.log("User component yüklendi")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)


let user1 = new User(1, "Engin", "Demiroğ", "Ankara")
let user2 = new User(2, "Baran", "Gökçekli", "Muğla")


userService.add(user1)
userService.add(user2)

console.log(userService.list())

console.log(userService.getById(2))

console.log("-----------------------------")

userService.load()
console.log(userService.customers)
console.log(userService.employees)
