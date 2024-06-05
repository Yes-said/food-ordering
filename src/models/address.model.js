const mongoose = require("mongoose");

//Define the address schema
const AddressSchema=new mongoose.Schema({
    fullName: String,
    streetAddress: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
});

//Define and export the address model
const Address = mongoose.model('Address', AddressSchema);
module.exports=Address;