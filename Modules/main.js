const express = require('express')
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var SomeModelSchema = new Schema({
    name: String,
    created_ts: Date
  });
var SomeModel = mongoose.model('Users', SomeModelSchema );
var Main = function(req,res){

}
module.exports = Main
Main.prototype.addusers = function(data,cbk){
console.log("hii")
    // SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
    //     if (err) return handleError(err);
    //     // saved!
    //   });


}