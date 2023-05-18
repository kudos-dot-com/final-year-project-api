const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema.Types;


const examSchema=new mongoose.Schema({
    item:{ type: "array", required: true},
    name:{type: "string",required:true},
    phone:{type: "string",required:true},
     
 

    // user:{type:ObjectId, required: false,ref:"users"},
    // exam:{ type: ObjectId, required: true,ref:"exams"},
},
{timestamps:true}
)

module.exports = mongoose.model('Chapter',examSchema,'chapters');