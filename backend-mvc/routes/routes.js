const express=require('express')
const router=express.Router()
const bookController =require("../controllers/bookController")

router.post("/bookcreate", bookController.createBook)

router.delete("/bookdelete/:searchValue",bookController.deleteBook)

router.put("/bookupdate/:id",bookController.updateBook)

router.get("/bookdisplay",bookController.displayBook)

router.get("/booksearch/:searchValue",bookController.searchBook)

module.exports=router