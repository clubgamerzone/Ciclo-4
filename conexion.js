const mongoose = require(   'mongoose');
mongoose.connect('mongodb+srv://123user:123user@cluster0.idro7k1.mongodb.net/?retryWrites=true&w=majority')

const objdb = mongoose.connection


objdb.on('connected', ()=>{console.log('ok con')})
objdb.on('error', ()=>{console.log('error connection to mdb')})

module.exports = mongoose