const express = require("express");

const router = express.Router();


router.get("/leaders", fetchAllLeaders);

router.post("/leaders", insertLeader);

router.get("/leaders/:leaderId", getLeader);

router.delete("/leaders/:leaderId", deleteLeader);

router.put("/leaders/:leaderId", updateLeader);




function fetchAllLeaders(req, res){
    res.end('Will send all the leaders to you!');
}
function insertLeader(req, res){
    res.end('Will add the leader');
}

function getLeader(req, res){
    res.end('Will send details of the leader: ' + req.params.dishId +' to you!'); 
}

function deleteLeader(req, res){
    res.end('Deleting leader: ' + req.params.dishId);
}

function updateLeader(req, res){
    res.write('Updating the leader: ' + req.params.dishId + '\n');
}
  
  

module.exports = router;