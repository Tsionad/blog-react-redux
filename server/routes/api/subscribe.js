const express = require('express');
const router = express.Router();

const {Subscriber} = require('../../models');

router.post('/', (req, res) => {

  Subscriber.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: {
      email: req.body.email
    }
  })
  .then((subscriber) => {
    if (subscriber[1]) {
      res.sendStatus(200);
    } else {
      res.sendStatus(209);
    }
  })
  .catch((err) => {
    res.sendStatus(409);
  });

});

module.exports = router;
