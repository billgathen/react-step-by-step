// Keymirror is a utility that makes sure our keys and
// values are exactly the same values, to ensure we never
// mis-type one or the other
//
var keyMirror = require('keymirror');

module.exports = keyMirror({
  LIKED: null
});