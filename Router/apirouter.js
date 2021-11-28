var express = require('express')
var router = express.Router()

const jsonfile = require('jsonfile')
const USER= require('../Modules/user')
var user = new USER()
var Sessioncheck =async function (req, res, next) {

// require('../datas.json')
   
    const file ='../JSONAPI/datas.json'
    await jsonfile.readFile(file) .then(obj => req['sessionObj'] = obj)
    var sessionObj = req['sessionObj']
 
    if (sessionObj && sessionObj.token) {


        next();

    } else {
        res.status(401).json({
            status: false,
            message: 'Unauthorized Access'
        })
    }
};
    router.post('/user/:id',Sessioncheck,function(req,res){
        user.perforam(req,res)
    })

module.exports = router


    