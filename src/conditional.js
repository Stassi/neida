/**
 * @callback predicate
 * @description Determines the outcome of a decision.
 * @returns {boolean}
 */

/**
 * @callback callConditionally
 * @description A function that is called only if a predicate is satisfied.
 * @returns {*}
 */

/**
 * @description Conditionally call a function.
 * @example
 * conditional({
 *   ifFalse: () => 'falsy',
 *   ifTrue: () => 'truthy',
 *   predicate: () => true
 * })
 * // => 'truthy'
 * @module
 * @param {Object} o
 * @param {callConditionally} o.ifFalse Called if predicate returns `false`.
 * @param {callConditionally} o.ifTrue Called if predicate returns `true`.
 * @param {predicate} o.predicate Returned value determines which function is called.
 * @returns {*} Value returned by called function.
 */
export default function conditional ({ ifFalse, ifTrue, predicate }) {
  return predicate() ? ifTrue() : ifFalse()
}
