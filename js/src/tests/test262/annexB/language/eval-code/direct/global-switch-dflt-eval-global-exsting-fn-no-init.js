// This file was procedurally generated from the following sources:
// - src/annex-b-fns/eval-global-exsting-fn-no-init.case
// - src/annex-b-fns/eval-global/direct-switch-dflt.template
/*---
description: Existing variable binding is not modified (Funtion declaration in the `default` clause of a `switch` statement in eval code in the global scope)
esid: sec-web-compat-evaldeclarationinstantiation
es6id: B.3.3.3
flags: [generated, noStrict]
info: |
    B.3.3.3 Changes to EvalDeclarationInstantiation

    [...]
    a. If declaredFunctionOrVarNames does not contain F, then
    [...]
---*/

eval(
  'assert.sameValue(f(), "outer declaration");switch (1) {' +
  '  default:' +
  '    function f() { return "inner declaration"; }' +
  '}\
  function f() {\
    return "outer declaration";\
  }'
);

reportCompare(0, 0);
