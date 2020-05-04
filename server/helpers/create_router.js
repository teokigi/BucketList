const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();
    //get all
  router.get('/', (req, res) => {
    collection.find().toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });
  //show one
  router.get('/:id', (req,res) =>{
      collection.findOne({_id:ObjectID(req.params.id)})
      .then((doc => res.json(doc)
      .catch(err =>{
          console.error(err);
          res.status(500);
          res.json({status:500,error:err});
      })))
  })
  //post one
  router.post('/',(req,res)=>{
      collection.insertOne(req.body)
      .then(result => res.json(result.ops[0]))
  })
  //update one
  router.put('/:id',(req,res)=>{
        collection.findOneAndUpdate(
            {_id:ObjectID(req.params.id)},
            {$set:req.body},
            {returnOriginal:false}
            ).then(result => res.json(result.value))
  })
  //delete one
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then(result => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });
  return router;

};

module.exports = createRouter;
