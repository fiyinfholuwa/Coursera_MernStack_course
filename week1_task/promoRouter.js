const express = require("express");

const router = express.Router();


router.get("/promotion", fetchAllPromotion);

router.post("/promotion", insertPromotion);

router.get("/promotion/:promoId", getPromotion);

router.delete("/promotion/:promoId", deletePromotion);

router.put("/promotion/:promoId", updatePromotion);




function fetchAllPromotion(req, res){
    res.end('Will send all the promotions to you!');
}
function insertPromotion(req, res){
    res.end('Will add the promotion');
}

function getPromotion(req, res){
    res.end('Will send details of the promotion: ' + req.params.dishId +' to you!'); 
}

function deletePromotion(req, res){
    res.end('Deleting promotion: ' + req.params.dishId);
}

function updatePromotion(req, res){
    res.write('Updating the Promotion: ' + req.params.dishId + '\n');
}
  
  

module.exports = router;