const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const WishSchema = Schema({
    wish:String
});

mongoose.model("wishes",WishSchema)