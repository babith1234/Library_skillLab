const express =require('express')
const mongoose=require('mongoose')
const routes=require('./routes/routes')
const cors =require('cors')               //not necessary now(To give data to all)
const dotenv=require('dotenv')            //to keep all credentials,API,links and update changes in only one place

dotenv.config()                           // for connecting to .env file
const port = process.env.PORT

const app=express()

app.use(express.json())                   // whatever the data we will use will be in json format only
app.use(cors())                          //cross origin(external client) can also accesss the data 

mongoose.connect(process.env.URI).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})

app.use("/", routes)                     // first this will be called

app.listen(port, ()=>{
    console.log(`server running at ${port}`);
})




