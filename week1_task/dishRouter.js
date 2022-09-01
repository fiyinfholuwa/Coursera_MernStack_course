const express = require("express");

const router = express.Router();


router.get("/dishes", fetchAllDishes);

router.post("/dishes", insertDish);

router.get("/dishes/:dishId", getDish);

router.delete("/dishes/:dishId", deleteDish);

router.put("/dishes/:dishId", updateDish);




function fetchAllDishes(req, res){
    res.end('Will send all the dishes to you!');
}
function insertDish(req, res){
    res.end('Will add the dish');
}

function getDish(req, res){
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!'); 
}

function deleteDish(req, res){
    res.end('Deleting dish: ' + req.params.dishId);
}

function updateDish(req, res){
    res.write('Updating the dish: ' + req.params.dishId + '\n');
}
  
  

module.exports = router;