const express = require('express');
const router = express.Router();
const datamodel = require('../model/datamodel');


router.get('/',(request,response)=>{
    datamodel.fetchdetails((result)=>{
        response.status(200).send(result);
    })
})

router.get('/:id',(request,response)=>{
    // console.log("check2");
    let id = request.params.id;
    datamodel.fetchdetailsid(id,(result)=>{
        // console.log("check1");
        response.status(200).send(result);
    })
})

router.put('/update/:id',(request,response)=>{
    let id = request.params.id;
    // console.log(id);
    let data = request.body;
    // console.log(data);
    datamodel.updatedata(id,data,(result)=>{
        response.status(200).send(result);
    });
})

router.post('/addData',(request,response)=>{
    let data = request.body;
    console.log(this.data);
    datamodel.addData(data,(result) => {
        response.status(200).send(result);
    })
})

router.delete('/del/:id',(request,response)=>{
    let id = request.params.id;
    datamodel.deletedata(id,(result) => {
        response.status(200).send(result);
    })
})

module.exports = router;