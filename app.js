const express = require('express');
const bodyParser =  require('body-parser')
const multer=require('multer');
const studentRoutes = require('./routes/studentRoute');
const { default: mongoose } = require('mongoose');


const app = express();

const mongoDB ='mongodb+srv://Mongodb:node001@cluster1.7csvp.mongodb.net/test'


app.use('/ref',studentRoutes);
app.use(bodyParser.urlencoded({ extended: true }));

// to upload photo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'images');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + '-' + file.originalname);
      var fileExplode = file.originalname.split('.')
      var filename=fileExplode[0];
      var type = fileExplode[fileExplode.length-1]
      cb(null,filename+'_'+Date.now()+'_'+type)
    }
  });
  const upload = multer({storage:storage}).single('profile')
  server.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
  );
mongoose.connect(mongoDB).then(()=>{
app.listen(3000,function () {
      console.log("Server Started at PORT 3000");
})
})
