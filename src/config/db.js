const mongoose = require("mongoose")

const mongodbUrl="mongodb+srv://bobsaid406:AjSHf3OI0JpEgV56@cluster0.wmfnsnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB(){
    return mongoose.connect(mongodbUrl)
}

module.exports=connectDB