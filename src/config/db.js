const mongoose = require("mongoose")

const mongodbUrl="mongodb+srv://bobsaid4061:jnn1pH4yiaP5KMg5@cluster0.9k2c5oe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB(){
    return mongoose.connect(mongodbUrl)
}

module.exports=connectDB