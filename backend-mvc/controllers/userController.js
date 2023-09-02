const userModel = require("../models/userModel")
const {body,validationResult}= require('express-validator')
const bcrypt = require("bcryptjs")

// const createUser = async (req, res) => {
//     // body('email').isEmail(),
//     // body('password').isLength({min:6})
//     try {
//       let data = req.body;
//       if (Object.keys(data) == 0) {
//         return res.status(400).send({ status: false, msg: "no data provided" });
//       }
//       let saveData = await userModel.create(data);
//       return res.status(201).send({ status: true, msg: "data insert success" });
//     } catch (err) {
//       console.log(err);
//       return res.status(500).send({ msg: "error" });
//     }
//   };

  const createUser = async (req, res) => {
    // body('email').isEmail(),
    // body('password').isLength({min:6})
     const salt = await bcrypt.genSalt(10)
     let setPassword = await bcrypt.hash(req.body.password,salt)
    try {
      let data = req.body;
      if (Object.keys(data) == 0) {
        return res.status(400).send({ status: false, msg: "no data provided" });
      }
      let saveData = await userModel.create({
        name:req.body.name,
        contact:req.body.contact,
        email:req.body.email,
        password:setPassword

      });
      return res.status(201).send({ status: true, msg: "data insert success" });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ msg: "error" });
    }
  };


  const loginUser=async(req,res)=>{
    let email=req.body.email
    try{
      let userData = await userModel.findOne({email})
      if(!userData){
        return res.status(400).json({errors:"Try logging with correct credentials"})
      }
      if(req.body.password!=userData.password){
        return res.status(400).json({errors:"Try logging with correct credentials"})
      }
      return res.json({success:true})

    }catch(e){
        console.log(e)
    }
  }

  module.exports = {
    createUser,
    loginUser
  };