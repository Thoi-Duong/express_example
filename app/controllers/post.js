var express = require('express'),
    router = express.Router();

module.exports = function(app) {
  app.use('/post', router);
  console.log('on init controller');
};

router.get('/hello', function (req, res) {
  res.send('post controller: hello!!');
  console.log('on post controller!!');
});
