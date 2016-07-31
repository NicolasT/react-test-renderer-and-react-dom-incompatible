import renderer from 'react/lib/ReactTestRenderer';

/* Imagine the following import is actually burried somewhere in the dependency
 * chain of some module I actually want to test...
 */
import ReactDOM from 'react-dom';

describe('Failure', () => {
  it('fails', () => {
  });
});
