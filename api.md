## Functions

<dl>
<dt><a href="#difference">difference(...set)</a> ⇒ <code>Set</code></dt>
<dd><p>Subtracts the second through nth set from the first set passed</p>
</dd>
<dt><a href="#every">every(set, filter)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if every set element returns a truthy value when passed to the
provided filter function, and false otherwise</p>
</dd>
<dt><a href="#filter">filter(set, filter)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns a new set with all values that cause the filter function to return
a truthy value</p>
</dd>
<dt><a href="#find">find(set, finder)</a> ⇒ <code>*</code></dt>
<dd><p>Returns the first set element causing the provided function to return truthy
when passed</p>
</dd>
<dt><a href="#intersection">intersection(...set)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns the intersection of values in all sets passed</p>
</dd>
<dt><a href="#join">join(set, [separator])</a></dt>
<dd><p>Joins the set elements using the provided separator, or a comma if no
separator is provided</p>
</dd>
<dt><a href="#map">map(set, mapper)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns a new set created by calling a provided function with every element
in the set.</p>
</dd>
<dt><a href="#reduce">reduce(set, reducer, [initialValue])</a> ⇒ <code>*</code></dt>
<dd><p>Reduces a set to a single value based on the provided reduction function
and optional initial value.</p>
</dd>
<dt><a href="#some">some(set, filter)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if some set element returns a truthy value when passed to the
provided filter function, and false otherwise</p>
</dd>
<dt><a href="#toArray">toArray(set)</a> ⇒ <code>Array</code></dt>
<dd><p>Turns a set into an array</p>
</dd>
<dt><a href="#union">union(...set)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns a set containing the union of all sets passed</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#iteratorCallback">iteratorCallback</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#reduceCallback">reduceCallback</a> : <code>function</code></dt>
<dd></dd>
</dl>

<a name="difference"></a>

## difference(...set) ⇒ <code>Set</code>
Subtracts the second through nth set from the first set passed

**Kind**: global function  
**Returns**: <code>Set</code> - first set without elements that appear in subsequent sets  

| Param | Type |
| --- | --- |
| ...set | <code>Set</code> | 

<a name="every"></a>

## every(set, filter) ⇒ <code>boolean</code>
Returns true if every set element returns a truthy value when passed to the
provided filter function, and false otherwise

**Kind**: global function  
**Returns**: <code>boolean</code> - whether every value matches the filter  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> |  |
| filter | <code>[iteratorCallback](#iteratorCallback)</code> | function which is passed the current      value and the entire set |

<a name="filter"></a>

## filter(set, filter) ⇒ <code>boolean</code>
Returns a new set with all values that cause the filter function to return
a truthy value

**Kind**: global function  
**Returns**: <code>boolean</code> - filtered set  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> |  |
| filter | <code>[iteratorCallback](#iteratorCallback)</code> | function which is passed the current      value and the entire set |

<a name="find"></a>

## find(set, finder) ⇒ <code>\*</code>
Returns the first set element causing the provided function to return truthy
when passed

**Kind**: global function  
**Returns**: <code>\*</code> - the first value found, or undefined of nothing was found  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> |  |
| finder | <code>[iteratorCallback](#iteratorCallback)</code> | function which is passed the current      value and the entire set |

<a name="intersection"></a>

## intersection(...set) ⇒ <code>Set</code>
Returns the intersection of values in all sets passed

**Kind**: global function  
**Returns**: <code>Set</code> - intersection of all provided sets  

| Param | Type |
| --- | --- |
| ...set | <code>Set</code> | 

<a name="join"></a>

## join(set, [separator])
Joins the set elements using the provided separator, or a comma if no
separator is provided

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| set | <code>Set</code> |  |  |
| [separator] | <code>\*</code> | <code>&#x27;,&#x27;</code> | separator, which is passed to Array.prototype.join |

<a name="map"></a>

## map(set, mapper) ⇒ <code>Set</code>
Returns a new set created by calling a provided function with every element
in the set.

**Kind**: global function  
**Returns**: <code>Set</code> - mapped set  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> | starting set |
| mapper | <code>[iteratorCallback](#iteratorCallback)</code> | map function, which is passed the      current value and the entire set |

<a name="reduce"></a>

## reduce(set, reducer, [initialValue]) ⇒ <code>\*</code>
Reduces a set to a single value based on the provided reduction function
and optional initial value.

**Kind**: global function  
**Returns**: <code>\*</code> - reduced value  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> | starting set |
| reducer | <code>[reduceCallback](#reduceCallback)</code> | reduction function, which is passed the reduced      value, current value, and entire set, in that order |
| [initialValue] | <code>\*</code> | first value used for the reduced value passed      to reducer - the first value from the set will be used if not provided |

<a name="some"></a>

## some(set, filter) ⇒ <code>boolean</code>
Returns true if some set element returns a truthy value when passed to the
provided filter function, and false otherwise

**Kind**: global function  
**Returns**: <code>boolean</code> - whether any values match the filter  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> |  |
| filter | <code>[iteratorCallback](#iteratorCallback)</code> | function which is passed the current      value and the entire set |

<a name="toArray"></a>

## toArray(set) ⇒ <code>Array</code>
Turns a set into an array

**Kind**: global function  

| Param | Type |
| --- | --- |
| set | <code>Set</code> | 

<a name="union"></a>

## union(...set) ⇒ <code>Set</code>
Returns a set containing the union of all sets passed

**Kind**: global function  
**Returns**: <code>Set</code> - union of all sets provided  

| Param | Type |
| --- | --- |
| ...set | <code>Set</code> | 

<a name="iteratorCallback"></a>

## iteratorCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | set value |
| set | <code>Set</code> | set being iterated over |

<a name="reduceCallback"></a>

## reduceCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| reducedValue | <code>\*</code> | intermediate reduced value |
| value | <code>\*</code> | set value |
| set | <code>Set</code> | set being iterated over |

