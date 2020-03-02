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

**Returns**: <code>number</code> - sum of x and y  
**See**: [addOne](#module_addOne)  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

**Example**  
```js
sum(2, 3)
// => 5
```
<a name="module_addOne"></a>

## addOne ⇒ <code>number</code>
Increment value by 1.

**Returns**: <code>number</code> - x incremented by 1  
**See**: [add](#module_add)  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 

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
| x | <code>Object</code> | 
| x.collection | [<code>Array.&lt;Any&gt;</code>](#Any) | 
| x.length | <code>number</code> | 

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
