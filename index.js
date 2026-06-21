const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const app = express();
// Require the Cloudinary library
const cloudinary = require('cloudinary').v2;

const port = 4000;

const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'./uploads');
    },
    filename:(req,file,cb)=>{
        const vari = uuidv4();
        cb(null,vari + file.originalname);
    }
})
const multers=multer({storage:storage});
app.get('/', (req, res) => {
    res.send('Server is running');
});


cloudinary.config({
    cloud_name: 'darrgzybb',
    api_key: '722563917192332',
    api_secret: 'I6cvGllp4nM-dQsrDR2ZLTflSNs'
});

app.post('/uploads',multers.single('myFiles'),(req,res)=>{
    console.log(req,'req')
    cloudinary.uploader.upload(req.file.path, (error, result)=>{
  console.log(result, error);
});
    res.status(200).send("File Upload Successfully");
})

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
});