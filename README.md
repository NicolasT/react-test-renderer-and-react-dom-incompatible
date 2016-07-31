# react-test-renderer-and-react-dom-incompatible

```
$ npm test

> react-test-renderer-and-react-dom-incompatible@1.0.0 test /tmp/react-incompat
> jest

Using Jest CLI v14.0.1, jasmine2, babel-jest
 FAIL  __tests__/Failure-test.js (0s)
● Runtime Error
  - Invariant Violation: ReactCompositeComponent: injectEnvironment() can only be called once.
        at invariant (node_modules/fbjs/lib/invariant.js:38:15)
        at Object.ReactComponentEnvironment.injection.injectEnvironment (node_modules/react/lib/ReactComponentEnvironment.js:43:60)
        at Object.inject (node_modules/react/lib/ReactDefaultInjection.js:79:28)
        at Object.<anonymous> (node_modules/react/lib/ReactDOM.js:28:23)
        at Object.<anonymous> (node_modules/react-dom/index.js:3:18)
        at Object.<anonymous> (__tests__/Failure-test.js:6:43)
1 test suite failed, 0 tests passed (0 total in 1 test suite, run time 0.83s)
npm ERR! Test failed.  See above for more details.
```
