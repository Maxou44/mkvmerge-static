var tape = require('tape');
var fs = require('fs');
var mkvmerge = require('..');

tape('mkvmerge path should exist on fs', function (t) {
  var stats = fs.statSync(mkvmerge.path);
  t.ok(stats.isFile(mkvmerge.path));
  t.end();
});
