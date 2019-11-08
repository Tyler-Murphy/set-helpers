/** Subtracts the second through nth set from the first set passed */
export function difference<T>(set: Set<T>, ...sets: Array<Set<T>>): Set<T>

/** Returns true if every set element returns a truthy value when passed to the provided filter function, and false otherwise */
export function every<T>(set: Set<T>, filter: (value: T, set: Set<T>) => boolean): boolean

/** Returns a new set with all values that cause the filter function to return a truthy value */
export function filter<T>(set: Set<T>, filter: (value: T, set: Set<T>) => boolean): Set<T>

/** Returns the first set element causing the provided function to return truthy when passed */
export function find<T>(set: Set<T>, finder: (value: T, set: Set<T>) => boolean): T

/** Returns the first element of a set */
export function first<T>(set: Set<T>): T

/** Returns the intersection of values in all sets passed */
export function intersection<T>(set: Set<T>, ...sets: Array<Set<T>>): Set<T>

/** Returns true if the first set is a subset of the second, and false otherwise */
export function isSubset(set1: Set<any>, set2: Set<any>): boolean

/** Returns true if the first set is a superset of the second, and false otherwise */
export function isSuperset(set1: Set<any>, set2: Set<any>): boolean

/** Joins the set elements using the provided separator, or a comma if no separator is provided */
export function join(set: Set<any>, separator?: string): string

/** Returns the last element of a set */
export function last<T>(set: Set<T>): T

/** Returns a new set created by calling a provided function with every element in the set. */
export function map<T, U>(set: Set<T>, mapper: (value: T, set: Set<T>) => U): Set<U>

/** Reduces a set to a single value based on the provided reduction function and optional initial value. */
export function reduce<T, U>(set: Set<T>, reducer: (reducedValue: U, currentValue: T, set: Set<T>) => U, initialValue?: U): U

/** Returns true if some set element returns a truthy value when passed to the provided filter function, and false otherwise */
export function some<T>(set: Set<T>, filter: (value: T, set: Set<T>) => boolean): boolean

/** Turns a set into an array */
export function toArray<T>(set: Set<T>): Array<T>

/** Returns a set containing the union of all sets passed */
export function union<T>(set: Set<T>, ...sets: Array<Set<T>>): Set<T>
