const mongoose = require('mongoose');
const validator = require('validator');
const bycrpt = require('bcrypt');
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true              //   '          Amr              ' ==> 'Amr'
    },
    age:{
        type:Number,
        default:20,
        validate(value){
            if(value <0){
                throw new Error('Age must be a positve number')
            }
        }
    },
    email:{
        type:String,
        required:true,
        lowercase:true,  // 'FARAH@HOTMAIL.COM' ==> 'farah@hotmail.com'
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:6

    }
}); 
schema.pre('save', async function(next){
    const user = this;
    user.password = await bycrpt.hash(user.password, 8);
    next();
});
const User = mongoose.model('User',schema);


module.exports = User