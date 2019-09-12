var assert = require('assert');
var api = require("..");
var internal = api.internal;

describe('mapshaper-custom-projections.js', function() {

  describe('replaceProjParam()', function() {
    
  })

  describe('parseCustomParams()', function() {

    it ('test1', function() {
      var target = {AK: {lon_0: -141, position: [0.1, 0.9]}}
      var output = internal.parseCustomParams(['AK.lon_0=-141', 'AK.position=0.1,0.9']);
      assert.deepEqual(output, target);

    });
  });

});