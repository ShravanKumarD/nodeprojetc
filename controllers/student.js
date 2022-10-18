const studentModels = require('../models/student');
const file  = require('../models/csv');


exports.studentData = (req,res)=>{
    //const id=req.body.id;//an id automatically generated by mongodb
    const name=req.body.name;
    const Age = req.body.Age;
    const Mark1=req.body.Mark1;
    const Mark2=req.body.Mark2;
    const Mark3=req.body.Mark3;
    studentModels.save();
    return student.save()
    .then(data=>{
        console.log(data)
        res.status(200).json({message:'student details updated successfully!!'})
    }).catch(err=>{
        console.log(err)
    })
}
exports.getStudents = (req,res)=>{
    studentModels.findAll()
    .then(data=>{
        res.status(200).json({message:'student fetched successfully',data:data})
    }).catch(err=>{
        console.log(err)
    })
}
exports.getStudentById=(req,res)=>{
    const id  = req.body.id;
    studentModels.findById({id:id}).then(data=>{
    res.status(200).json({message:`student id ${id} details`,data:data})
    }).catch(err=>{
        console.log(err)
    })
}

exports.filupload = (req,res)=>{
    const csv = req.file
   var newfile = new file({
    csv:file
   });
   return newfile.save()
   .then(data=>{
    res.status(200).json({message:'file saved successfully'})
   }).catch(err=>{
    console.log(err)
})

}