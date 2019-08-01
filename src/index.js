'use strict';

function isObject(val) {
  if( typeof(val) === 'object' ) {
    return true;
  }
  return false;
}

export default isObject;
