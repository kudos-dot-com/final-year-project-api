const mongoose=require('mongoose');
const {MONGO_URI}= require('./config');

function DbConnect()
{ 
    mongoose.connect('mongodb+srv://sajal1943:BWE3BvpihmtwFM13@cluster0.mjukdlg.mongodb.net/',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("DataBase Connected"))
    .catch(err => console.log(err));
    
}
module.exports = DbConnect;