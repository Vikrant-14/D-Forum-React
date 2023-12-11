const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/dforum';

module.exports.connect = ()=>{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('MongoDB Connected Successfully');
    }).catch((error)=>{
        console.log('Error',error);
    })
}


