const express = require("express");
const Student = require("../models/student");

const router = express.Router();

router.get('/', (req,res)=>{
   res.render("index");

})


//  router.get("/search/:name",  async (req,res)=>{
//     try {
//         student = await Student.findById(req.params.id);
//         if (student == null) {
//           return res.status(404).json("cannot find student");
//         }else{
//             res.render("search", {results: student})
//         }
//       } catch (err) {
//         res.status(500).json({ message: err.message });
//       }
      
    
    

// })

router.post('/result', (req , res)=>{
    
    Student.findOne({ code: req.body.code}, function(err, result){
        if(err){
         res.status("500").json({msg: err.message})
        }
         if(result){
           if(req.body.code == result.code){
               if(result.marks<200){ res.render('fail',{results:result})}
               else{
           res.render('search',{results: result} );}}
        
            }
            else {
                res.render("error")
            }
    
          
})
});

router.post("/" , async (req, res)=>{
    
    const newStudent = new Student({
        name: req.body.name,
        class: req.body.class,
        marks: req.body.marks,
        percentage: (req.body.marks / 800)* 100,
        code: req.body.name + "-" + req.body.class,

    })
    
    try{
        
        const newstd = await newStudent.save();
        res.status(200).json(newstd);
    }catch(err){
        res.status(500).json({message: err.message});
    }
    
})


module.exports = router;