var express=require('express');
var app=express();
var fabrikamController=function(req,res)
{
var fabrikam=[{productid:1,productname:"shirts",quantity:"2"},{productid:2,productname:"earings",quantity:"4"},

];
res.send(fabrikam)
};
app.get('/fabrikam',fabrikamController);
var server=app.listen(8086,function()
{
var host=server.address().address;
var port=server.address().port;
console.log("express listening at http://localhost:8086",host,port);
})