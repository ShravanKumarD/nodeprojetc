const express = require('express');
const studentController = require('../controllers/student')
var router = express.Router();
/**http://localhost:3000/ref/poststudentdata*/
router.post('/poststudentdata',studentController.studentData);
router.get('/getstudents',studentController.getStudents);
/**http://localhost:3000/ref/getstudent/''*/
router.get('/getstudent/:id',studentController.getStudentById);
/**http://localhost:3000/ref/getstudent/csv*/
router.post('/csv',studentController.filupload);

module.exports=router;