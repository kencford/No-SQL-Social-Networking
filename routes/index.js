const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  console.log("I am here");
  return res.send('Wrong route!');
});

module.exports = router;
