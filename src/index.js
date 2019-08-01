'use strict';

function isObject(val) {
  if( typeof(val) === 'object' && val !== null ) {
    return true;
  }
  return false;
}

export default isObject;
