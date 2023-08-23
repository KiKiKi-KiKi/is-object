'use strict';

function isObject(value?: unknown): value is Record<string, unknown> {
  return (
    value !== null && typeof value === 'object' && value.constructor === Object
  );
}

export default isObject;
