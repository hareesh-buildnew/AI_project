let express=require('express')
let router = express.Router()
let Interview=require('../models/Interview')
let auth = require('../authCheck/auth')

router.post('/interview',auth,async(req,res)=>{
    let {experience,role,interviewType,numberOfQuestions,questions}=req.body;
    try{
        if(!experience||!role||!interviewType,!numberOfQuestions||!questions){
            return res.status(400).json({msg:'anni fill chey ra'})
        }
        await Interview.create({
            userId:req.user._id,
        experience,role,interviewType,numberOfQuestions,questions
        })

        res.send("Done")
    }
    catch(err){
        res.status(400).send("Check and solve this eroorrrr...  ",err)
    }

})