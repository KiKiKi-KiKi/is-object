'use strict';

function isObject(val) {
  if( typeof(val) === 'object'
   && val !== null
   && val.constructor === Object ) {
    return true;
  }
  return false;
}

export default isObject;
