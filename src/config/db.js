const mongoose = require("mongoose")

const mongodbUrl="mongodb+srv://bobsaid406:VTeEbJMErcVgru1I@cluster0.bh44xgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB(){
    return mongoose.connect(mongodbUrl)
}

module.exports=connectDB