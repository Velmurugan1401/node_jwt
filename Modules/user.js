var express = require('express')
const main = require('./main')
const Common = require('./common')

 function user(req,res){
    this.common = new Common()
}

user.prototype.perforam = function(req,res){
var expression = req.params.id
switch(expression) {
    case 'add':
        this.common.Insert(req,res)
      break;
    case 'update':
      // code block
      break;
    default:
      // code block
  }

    

}


module.exports = user