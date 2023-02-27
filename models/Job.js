const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true, 'please rovide company name'],
        maxLength: 50
    },
    position:{
        type:String,
        required:[true, 'please provide Position'],
        maxLength: 100
    },
    status:{
        type:String,
        enum:['interview', 'declined', 'pending'],
        default:'pending',
    },
    createdBy:{
        type:mongoose.Types.ObjectId,//tying up our job model to the user one
        ref:'User',
        required:[true, 'please provide the user']
    }
},{timestamps:true})


module.exports = mongoose.model('Job', JobSchema)