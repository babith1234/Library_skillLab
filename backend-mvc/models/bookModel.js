const mongoose =require('mongoose')
const booksSchema =new mongoose.Schema(
{
  Title:{
    type:String,
    trim:true,
  },

  Author:{
    type:String,
    trim:true,
  },

  Genre:{
    type:String,
    trim:true,

  },

 PublicationDate:{
    type:Date
 }

  },
  
)

module.exports=mongoose.model("test", booksSchema)