const express = require('express');
const app = express();
const mongoose = require("mongoose");
const {mongourl} = require('./config/keys');

const Wish = mongoose.model("wishes");

mongoose.connect(mongourl,{useNewUrlParser:true});

module.exports = (app)=>{
//get routes
 app.get('/',(req,res)=>{
    Wish.find({}).then(data=>{
        console.log(data)
        res.render('home',{wish:data})

    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})   
//post routes
app.post('/sent',(req,res)=>{
    const Item = new Wish({
        wish:req.body.item
    });
    Item.save().then(data=>{
        console.log("saved")
        res.send(data)
    }).catch(err=>{
        throw err;
    })
  
})

//delete routes

app.delete('/remove/:id',(req,res)=>{

    Wish.findOneAndRemove({wish:req.params.id}).then(data=>{
        console.log("deleted")
        res.send(data)
    })
   
})



}

