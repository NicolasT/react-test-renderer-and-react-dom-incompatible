import React from 'react';

/* Imagine the following import is actually buried somewhere in the dependency
 * chain of some module this one depends on...
 */
import ReactDOM from 'react-dom';

export default function HelloWorld() {
  return (
    <div>Hello, world!</div>
  );
}
