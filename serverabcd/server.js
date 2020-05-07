
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
//
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://qasim:qasim5611@cluster0-f0hna.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true},function (err) {
 
if(err){
    console.log('err',err)
}
else{
    console.log('successfully connected');
       
}
    
});


const Schema = mongoose.Schema;

const Comment = new Schema({
    name: String,
    age: Number,
    phone: String,
    date: { type: Date, default: Date.now },
  });

const conmenetTable = mongoose.model('comment',Comment);


// app.get('/',function (req,res) {

//     console.log('request from /');
    
//      var data = {
//          name:'usama',
//          age:'21'
//      }
//     res.json(data);
// });


app.post('/savetodb',function (req,res) {

    console.log('request recive');

    let saveNewRow = new conmenetTable();

    saveNewRow.name = req.body.name;
    saveNewRow.age = req.body.age;
    saveNewRow.phone = req.body.phnumber;
  
    saveNewRow.save((err,save)=>{
        
       if(err){
           res.json('error occored')
       }

       else{
       res.json(save);  //


       }
      
    });


    ////////////////////////////////////////////////
    
    
});
app.post('/getDataFromDB',function (req,res) {

   // .findOne()
    // .find()
  
    conmenetTable
      .find()
     // .where("name")
      // .in(['namme','Asif','Naveed'])
      // .and([{age:21},{name:'Naveed'}])
      // .and([{age:21},{name:'Asif'}])
      //.equals("qasim")
    //   .where("age")
    //   .lt(50)
    //   .gte(12)
    //   .limit(2)
    //   .sort({ age: -1 })
    //   .select("name age")
      .exec(function(err, data) {
        if (err) {
          console.log(err);
  
          res.json("error");
        }
        res.json(data);
        // athletes contains an ordered list of 5 athletes who play Tennis
      });
    
    
    
});

app.post("/DeleteDataFromDB", function(req, res) {

   console.log('server area' , req);
   conmenetTable
      .findOneAndDelete()
      .where("_id")
      .equals(req.body.id)
      .exec(function(err, data) {
        if (err) {
          console.log(err);
  
          res.json("error");
        }
        else{
        res.json(data);
        console.log( "deleted data" ,    data);
        
        }
        // athletes contains an ordered list of 5 athletes who play Tennis
      });
  });
  app.post("/UpdateDataFromDB", function(req, res) {

    console.log('server area' , req);
    conmenetTable
       .findOneAndDelete()
       .where("_id")
       .equals(req.body.id)
       .exec(function(err, data) {
         if (err) {
           console.log(err);
   
           res.json("error");
         }
         else{
         res.json(data);
         console.log( "deleted data" ,    data);
         
         }
         // athletes contains an ordered list of 5 athletes who play Tennis
       });
   });
   app.post("/EdityourInfo", function(req, res) {

     console.log('server area to check' , req.body.id);

// conmenetTable.findByIdAndUpdate("req.body.id",{name:req.body.name,age: req.body.age, phone: req.body.phnumber},{new:true},(err,data)=>{

// })

    conmenetTable
    .findOneAndUpdate()
       .where("_id")
       .equals(req.body.id)
       .set({ 
         name: req.body.name,
         age: req.body.age,
         phone: req.body.phnumber
      

         
      })
       .exec(function(err, data) {
         if (err) {
           console.log(err);
   
           res.json("error");
         }
         else{
         res.json(data);
         console.log( "Edited  data" ,    data);
         
         }
         // athletes contains an ordered list of 5 athletes who play Tennis
       });
   });





app.post('/test',function (req,res) {

     console.log('test');
    
    res.json('test');
});

// app.use(express.static('./public'));

// const PORT = process.env.PORT || 5000

app.listen(3030, function () {
    console.log('express server running on port 3030 ');
});