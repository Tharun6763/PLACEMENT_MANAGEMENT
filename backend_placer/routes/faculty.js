const express=require('express');
const connection=require('../connection');
const router=express.Router();
var auth=require('../services/authentication');

var checkRole=require('../services/checkrole');

router.get('/get',auth.authenticateToken,(req,res,next)=>
{
    var query="select * from faculty";
    connection.query(query,(err,results)=>{
    if(!err)
    {
        return res.status(200).json(results);
    }else{
        return res.status(500).json(err);
    }
    })
    
})

module.exports=router;