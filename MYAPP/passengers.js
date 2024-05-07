const express = require('express');

const app = express();
app.use(express.json());
const router = express.Router();

router.get('/passengers', function(req, res) {
    fetch('http://localhost:3000/passengers')
    .then(response => response.json())
    .then(passengers => {
        console.log(passengers);
        res.end(JSON.stringify(passengers));
    })
   
});

router.get('/passenger/:id', function(req, res) {
    const id = req.params.id;
    fetch(`http://localhost:3000/passengers/${id}`)
    .then(response => response.json())
    .then(passenger => {
        console.log(passenger);
        res.end(JSON.stringify(passenger));
    })
    
});

router.post('/passenger', function(req, res) {
    fetch('http://localhost:3000/passengers', {
        method: "POST",
        body: JSON.stringify({
            name: req.body.name,
            age: req.body.age,
            busnumber: req.body.busnumber,
            seatnumber: req.body.seatnumber,
            destination: req.body.destination
        }),
        headers: {
            "content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        res.end(JSON.stringify(response));
    })
    
});
router.put('/passenger/:id',function(req,res) {
  const id = req.params.id;
  fetch(`http://localhost:3000/passengers/${id}`, {
      method: "PUT",
      body: JSON.stringify ({
        name: req.body.name,
        age: req.body.age,
        busnumber: req.body.busnumber,
        seatnumber: req.body.seatnumber,
        destination: req.body.destination
      }),
      headers: {
          "content-type":"application/json"
      }
  })
  .then(response => response.json())
  .then(response => {
      console.log(response);
      res.end(JSON.stringify(response));
  })
  
});

router.delete('/passenger/:id',function(req,res) {
  const id = req.params.id;
  fetch(`http://localhost:3000/passengers/${id}`, {
      method: "DELETE",
      headers: {
          "content-type":"application/json"
      }
  })
  .then(response => response.json())
  .then(response => {
      console.log(response);
      res.end(JSON.stringify(response));
  })
  
});

app.use(router);
app.listen(5000, function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Server Listening on Port 5000");
});

 