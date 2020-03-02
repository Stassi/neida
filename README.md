# neida
[![build status][travis badge]][travis url]
[![npm dependencies][david dependencies badge]][david dependencies url]
[![npm dev dependencies][david dev dependencies badge]][david dev dependencies url]
[![license][license badge]][license file]
[![npm bundle size (minified)][bundlephobia badge]][bundlephobia url]
[![npm bundle size (minified + gzip)][bundlephobia badge zip]][bundlephobia url]
[![node supported versions][node badge]][package file]
[![npm latest version][npm badge]][npm url]

## Modules

<dl>
<dt><a href="#module_add">add</a> ⇒ <code>number</code></dt>
<dd><p>Add two values.</p>
</dd>
<dt><a href="#module_addOne">addOne</a> ⇒ <code>number</code></dt>
<dd><p>Increment value by 1.</p>
</dd>
<dt><a href="#module_chunk">chunk</a> ⇒ <code>Array.&lt;Array.&lt;Any&gt;&gt;</code></dt>
<dd><p>Group elements into fixed-length chunks.</p>
</dd>
<dt><a href="#module_subtractOne">subtractOne</a> ⇒ <code>number</code></dt>
<dd><p>Decrement value by 1.</p>
</dd>
<dt><a href="#module_sum">sum</a> ⇒ <code>number</code></dt>
<dd><p>Sum multiple values.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Any">Any</a> : <code>*</code></dt>
<dd><p>Any type.</p>
</dd>
</dl>

<a name="module_add"></a>

## add ⇒ <code>number</code>
Add two values.

**Returns**: <code>number</code> - sum of both values  
**See**

- [addOne](#module_addOne)
- [sum](#module_sum)


| Param | Type |
| --- | --- |
| n | <code>number</code> | 
| m | <code>number</code> | 

**Example**  
```js
sum(2, 3)
// => 5
```
<a name="module_addOne"></a>

## addOne ⇒ <code>number</code>
Increment value by 1.

**Returns**: <code>number</code> - value incremented by 1  
**See**

- [add](#module_add)
- [subtractOne](#module_subtractOne)


| Param | Type |
| --- | --- |
| n | <code>number</code> | 

**Example**  
```js
addOne(5)
// => 6
```
<a name="module_chunk"></a>

## chunk ⇒ <code>Array.&lt;Array.&lt;Any&gt;&gt;</code>
Group elements into fixed-length chunks.

**Returns**: <code>Array.&lt;Array.&lt;Any&gt;&gt;</code> - fixed-length chunks  

| Param | Type |
| --- | --- |
| o | <code>Object</code> | 
| o.collection | [<code>Array.&lt;Any&gt;</code>](#Any) | 
| o.length | <code>number</code> | 

**Example**  
```js
chunk({
  collection: ['a', 'b', 'c', 'd', 'e', 'f'],
  length: 2
})
// => [
//  ['a', 'b'],
//  ['c', 'd'],
//  ['e', 'f']
// ]
```
<a name="module_subtractOne"></a>

## subtractOne ⇒ <code>number</code>
Decrement value by 1.

**Returns**: <code>number</code> - value decremented by 1  
**See**: [addOne](#module_addOne)

| Param | Type |
| --- | --- |
| n | <code>number</code> | 

**Example**  
```js
subtractOne(5)
// => 4
```
<a name="module_sum"></a>

## sum ⇒ <code>number</code>
Sum multiple values.

**Returns**: <code>number</code> - sum of arguments  
**See**: [add](#module_add)

| Param | Type |
| --- | --- |
| ...n | <code>number</code> | 

**Example**  
```js
sum(2, 3, 5)
// => 10
```
<a name="Any"></a>

## Any : <code>\*</code>
Any type.

**Kind**: global typedef  

[bundlephobia badge]: https://img.shields.io/bundlephobia/min/neida.svg
[bundlephobia badge zip]: https://img.shields.io/bundlephobia/minzip/neida.svg
[bundlephobia url]: https://bundlephobia.com/result?p=neida (bundlephobia: neida)
[david dependencies badge]: https://img.shields.io/david/Stassi/neida
[david dependencies url]: https://david-dm.org/Stassi/neida (david: neida)
[david dev dependencies badge]: https://img.shields.io/david/dev/Stassi/neida
[david dev dependencies url]: https://david-dm.org/Stassi/neida?type=dev (david: neida dev)
[license badge]: https://img.shields.io/npm/l/neida.svg
[license file]: LICENSE (neida license)
[node badge]: https://img.shields.io/node/v/neida.svg
[npm badge]: https://img.shields.io/npm/v/neida.svg
[npm url]: https://www.npmjs.com/package/neida (npm: neida)
[package file]: package.json (neida package.json)
[travis badge]: https://img.shields.io/travis/com/Stassi/neida.svg
[travis url]: https://travis-ci.com/Stassi/neida (travis: neida)
