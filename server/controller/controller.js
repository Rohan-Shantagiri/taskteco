const express = require('express');
const router = express.Router();
const datamodel = require('../model/datamodel');


router.get('/',(request,response)=>{
    datamodel.fetchdetails((result)=>{
        response.status(200).send(result);
    })
})

router.get('/:id',(request,response)=>{
    let id = parseInt(request.params.id);
    datamodel.fetchdetailsid(id,(result)=>{
        response.status(200).send(result);
    })
})

router.put('/:id',(request,response)=>{
    console.log("Server check up 1");
    let id = parseInt(request.params.id);
    let review = request.body;
    datamodel.inserdata(id,review,(result)=>{
        response.status(200).send(result);
    });
})

router.post('/book',(request,response)=>{
    let details = request.body;
    datamodel.addData(details,(result) => {
        response.status(200).send(result);
    })
})



module.exports = router;