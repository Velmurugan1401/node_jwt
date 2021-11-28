const express = require('express')
const mongoose = require('mongoose');
const jsonfile = require('jsonfile')
const app = express()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config')
const route = require('./Router/apirouter')
const port = 9000
// console.log(config)

const file = './datas.json'

 


mongoose.connect(config.Database,function(err,success){
    if(err){

    }else{
        console.log('DB Connected')
    }
})
// parse requests of content-type - application/json
// app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',route)
app.get('/',async (req, res) => {
    var passwordhash =await bcrypt.hash('123456', 10)
    console.log(passwordhash)
//    await Token = jwt.sign({ email: 'velmurugan',password:bcrypt.hash('123456', 10) }, 'RESTfulAPIs',{ expiresIn: '2m' })
    const obj = { name: 'Velmurugan',passwordhash,token: jwt.sign({ email: 'velmurugan' }, 'RESTfulAPIs',{ expiresIn: '4m' })  }
    jsonfile.writeFile(file, obj, function (err) {
        if (err) console.error(err)
        else{
            res.send(obj)
        }
      })      
//   res.send('Hello World!')
})

app.get('/sessioncheck',(req,res)=>{
    // console.log(req.headers['token'])

    jwt.verify(req.headers['token'], 'RESTfulAPIs', (err, user) => {
        if (err) { 
         res.send(err)
         }
         else {
            jsonfile.readFile(file)
            .then(obj => bcrypt.compare("123456",obj.passwordhash, function(err, resss) {
                if(err){
                    res.send(err)
                }else{
                    res.send(resss)
                }
                // console.log(res,err)
            }))
            .catch(error => console.error(error))
             
         //proceed to the next action in the calling function
         }
        })
    // jwt.verify(req.params.token, 'RESTfulAPIs', function(err, decoded) {
    //     if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        
    //     res.status(200).send(decoded);
    //   });
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})