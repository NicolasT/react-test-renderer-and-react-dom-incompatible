# react-test-renderer-and-react-dom-incompatible

This repository contains a minimal testcase to show `ReactTestRenderer` and
`react-dom` don't play nice together. Actual scenario: testing of a component
using `ReactTestRenderer` which depends on a third-party component which
somewhere in its dependency/import tree imports `react-dom`.

```
$ npm test

> react-test-renderer-and-react-dom-incompatible@1.0.0 test /tmp/react-incompat
> jest

Using Jest CLI v14.0.1, jasmine2, babel-jest
 FAIL  __tests__/HelloWorld-test.js (0s)
● Runtime Error
  - Invariant Violation: ReactCompositeComponent: injectEnvironment() can only be called once.
        at invariant (node_modules/fbjs/lib/invariant.js:38:15)
        at Object.ReactComponentEnvironment.injection.injectEnvironment (node_modules/react/lib/ReactComponentEnvironment.js:43:60)
        at Object.<anonymous> (node_modules/react/lib/ReactTestRenderer.js:130:37)
        at Object.<anonymous> (node_modules/react-test-renderer/index.js:4:18)
        at Object.<anonymous> (__tests__/HelloWorld-test.js:6:269)
        at process._tickCallback (node.js:406:9)

Snapshot Summary
› 1 snapshot file found, run with `npm test -- -u` to remove it.

snapshot failure, 1 test suite failed, 0 tests passed (0 total in 1 test suite, run time 1.012s)
npm ERR! Test failed.  See above for more details.
```
