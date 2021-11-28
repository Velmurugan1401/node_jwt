
function Common(app,res){
 this.app = app 

}



Common.prototype.Insert=function(req,res) {
res.json('successfully')
}

Common.prototype.Update = function(req,res){

}
module.exports = Common