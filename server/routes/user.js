const router = require('express').Router();

const User = require('../models/user');

router.get('/users', (req,res)=>{
    User.findAll()
    .then((users)=>{
        if(!users.length) return res.status(404).send({err : 'User not found'});
        res.send(`find successfully  ; ${users}`);

    }).catch(err => res.status(500).send(err));

});

router.post('/', (req, res) => {
    User.create(req.body)
      .then(todo => res.send(todo))
      .catch(err => res.status(500).send(err));
  });


module.exports = router;