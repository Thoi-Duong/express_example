var express = require('express');
    glob = require('glob');

module.exports = function(app, config) {
  var controllers = glob.sync(config.root + '/app/controllers/*.js');
  controllers.forEach(function (controller) {
    require(controller)(app);
  });
};
