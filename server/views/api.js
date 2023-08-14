const router = require('express').Router();

// health check
router.get('/', function(req, res){res.send('Hello World!');})

// routers
router.use('/api/1.0/data', require('./data.js'));

module.exports = router;