const express = require('express');
const router = express.Router();
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var path = require('path');
var db;

//Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017', (err,client) => {
    if (err) return console.log(err);
    db = client.db('proyecto');
    closure(db);
  });
};

//Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Metodos
router.post('/getProducts', (req, res) => {
  connection((db) => {
    db.collection('products')
      .find()
      .toArray()
      .catch((err) => {
        sendError(err,res);
        response.message= {success:"", error:err};
        res.send({response});
      })
      .then((result) => {
        response.data = result;
        response.status = 1;
        response.message = {success:"Se obtuvo con exito", error:""};
        res.send({response});
      });
  });
});

router.post('/getSales', (req, res) => {
  connection((db) => {
    db.collection('sales')
      .find()
      .toArray()
      .catch((err) => {
        sendError(err,res);
        response.message= {success:"", error:err};
        res.send({response});
      })
      .then((result) => {
        response.data = result;
        response.status = 1;
        response.message = {success:"Se obtuvo con exito", error:""};
        res.send({response});
      });
  });
});

router.post('/getOne', (req, res) => {
 var find = { _id: new ObjectID(req.body.idd)};
 // const fin = {id: req.body.idd};
 console.log(find);

  connection((db) => {
    db.collection(req.body.collectionN.toString())
      .find(find)
      //.sort(req.body.order)
      //.limit(req.body.limit)
      .toArray()
      .catch((err) => {
        sendError(err, res);
        response.message = {success:"",error:err};
        res.send({response});
      })
      .then((result) => {
        response.data = result;
        response.ok = true;
        response.status = 1;
        response.message = {success:"Se obtuvo correctamente el registro",error:""};
        res.send({response});
      });
  });
});

router.post('/pushOne', (req, res) => {
  connection((db) => {
    db.collection(req.body.cN.toString())
      .insertOne(req.body.formu)
      .catch((err) => {
        sendError(err,res);
        response.message= {success:"", error:err};
        res.send({response});
      })
      .then((result) => {
        response.data = result.insertedId;
        // console.log(result.insertedId);
        response.status = 1;
        response.message = {success:"Se INSERTÓ con exito", error:""};
        res.send({response});
      });
  });
});

router.post('/pushSale', (req, res) => {
  var date = Date.now();
  let sale = req.body.formu;
  sale.date = date;
  connection((db) => {
    db.collection(req.body.cN.toString())
      .insertOne(sale)
      .catch((err) => {
        sendError(err,res);
        response.message= {success:"", error:err};
        res.send({response});
      })
      .then((result) => {
        response.data = result.insertedId;
        // console.log(result.insertedId);
        response.status = 1;
        response.message = {success:"Se INSERTÓ con exito", error:""};
        res.send({response});
      });
  });

});

router.post('/updateO', (req, res) => {
  console.log(req.body.productE);
  var find = { _id: new ObjectID(req.body.productE._id)};
  connection((db) => {
    db.collection(req.body.cN.toString())
      .replaceOne(find, req.body.productE)
      .catch((err) => {
        sendError(err,res);
        response.message= {success:"", error:err};
        res.send({response});
      })
      .then((result) => {
        response.data = result;
        response.status = 1;
        response.message = {success:"Se Actualizó con exito", error:""};
        res.send({response});
      });
  });
});

router.post('/deleteOne', (req, res) => {
  var find = { _id: new ObjectID(req.body.idd)};
  connection((db) => {
    db.collection(req.body.cN.toString())
      .remove(find)
      .catch((err) => {
        sendError(err,res);
        response.message= {success:"", error:err};
        res.send({response});
      })
      .then((result) => {
        response.data = result.nRemoved;
        // console.log(result.insertedId);
        response.status = 1;
        response.message = {success:"Se elimino ", error:""};
        res.send({response});
      });
  });
});


module.exports = router;
