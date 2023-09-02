const express=require('express')
const {body,validationResult}= require('express-validator')
const router=express.Router()
const bookController  = require("../controllers/bookController")
// const userModel = require("../models/userModel")
const userController = require("../controllers/userController")


router.post("/bookcreate", bookController.createBook)

router.delete("/bookdelete/:searchValue",bookController.deleteBook)

router.put("/bookupdate/:id",bookController.updateBook)

router.get("/bookdisplay",bookController.displayBook)

router.get("/booksearch/:searchValue",bookController.searchBook)

router.post("/usercreate",userController.createUser)

router.post("/userlogin",userController.loginUser)





module.exports=router