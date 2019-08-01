'use strict';

function isObject(val) {
  if( typeof(val) === 'object'
   && val !== null
   && !Array.isArray(val) ) {
    return true;
  }
  return false;
}

export default isObject;
