const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();

router.get('/buses',function(req,res) {
    fetch('http://localhost:3000/buses')
    .then(response => response.json())
    .then(response => {
        console.log(response);
        res.end(JSON.stringify(response));
    }) 
});
router.get('/bus/:id', function(req, res) {
  const id = req.params.id;
  fetch(`http://localhost:3000/buses/${id}`)
  .then(response => response.json())
  .then(response => {
      console.log(response);
      res.end(JSON.stringify(response));
  })
  
});
router.post('/bus', function(req,res) {
  fetch('http://localhost:3000/buses', {
      method: "POST",
      body: JSON.stringify({
          number: req.body.number,
          capacity: req.body.capacity,
          destination: req.body.destination,
          departuretime: req.body.departuretime
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

router.put('/bus/:id',function(req,res) {
  const id = req.params.id;
  fetch(`http://localhost:3000/buses/${id}`, {
      method: "PUT",
      body: JSON.stringify ({
          number: req.body.number,
          capacity: req.body.capacity,
          destination: req.body.destination,
          departuretime: req.body.departuretime
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

router.delete('/bus/:id',function(req,res) {
  const id = req.params.id;
  fetch(`http://localhost:3000/buses/${id}`, {
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
 app.listen(5000,function(err) {
    if(err){
        console.log(err);
    }
    console.log("Server Listening on Port 5000");
 })
   