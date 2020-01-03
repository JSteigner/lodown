'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, test) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            test(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            test(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * identity: Identity returns the given value unaltered. 
 * 
 * @param {Any Value} value: Can be any datatype
 * 
 * @return {Any Value}: Same value as input, unaltered 
 */
 
 function identity(value){
    return value;
}
module.exports.identity = identity;
// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';
var _ = {};


/** typeOf: Returns the data type of the input value as a string.
 *
 * @param: {Any data type} value : Input as an argument
 *
 * @return {String} :  Will return a string of the data type of value.
 */    
   
 function typeOf(value){
    if (Array.isArray(value)){
        return "array";
   }else if(value === null){
        return "null";
   }
    return typeof anything;  
}
 module.exports.typeOf = typeOf;

/** first: Returns the first number of elements corresponding to input number.
 *         If 'num' is greater than array length or not a number return an empty array.
 * 
 * @param {Array} array: The collection over which to iterate. Input as an arugment. Array may or may not have a value or even exist.
 * @param {Number}: num: Input as an argument. The number may have any numeric value.
 *
 * @return {Value}: emptyArrayResult:  The first number of elements in the array.
 */
 function first(array, num){
    let emptyArrayResult = [];
    if (isNaN(num) === true) {
        return array[0];
    } if (num < 0) {
        return emptyArrayResult;
    } else if(Array.isArray(array) === false) {
        return emptyArrayResult;
    } else if( num > array.length) {
        return array;
    } for(let i = 0; i < num; i++) {
            emptyArrayResult.push(array[i]);
        }  return emptyArrayResult;
}
 module.exports.first = first;

/** last: Gets the last number of elements of array. Designed to take two arguments - an array
 *        and a number - and evaluate existence of the arguments. If array is not an array, last
 *        returns an empty array. If array and number exist, the last number of elements of the array 
 *        is returned. If number is not given or is NaN, the last element of array is returned.
 *
 * @param {Array}: array: Input as an argument. Array may or may not have a value or even exist.
 * @param {Number}: num: Input as an argument. The number may have any numeric value, may not be given or NaN.
 *
 * @edgeCase: If number is negative an empty array is returned. If the number is greater than the array,
 *            the array is returned.
 * 
 * @return {Array}: arrResult:  If input array is not an array or if input number
 *                   is greater than the array length an empty array will be returned.
 *                   If number is not given or not a number, it will return the last element in the 
 *                   array. Otherwise the last supplied number of elements will be returned.
 */
 function last(array, num) {
    let arrResult = [];
    if(Array.isArray(array) === false) {
        return arrResult;
    } if (isNaN(num) === true) {
        return array[array.length - 1];
    } else if ( num < 0) {
        return arrResult;
    } else if( num > array.length) {
        return array;
    }  for(let i = num; i > 0; i--) {
        arrResult.push(array[i]);
    }   arrResult.sort();
    return arrResult;
}
module.exports.last = last;

/** indexOf: Designed to take two arguments, an array and a value. Gets the index
 *           at which the first occurrence of value is found in array. The test is to loop
 *           over an array by using a for loop. When the loop is initiated, the index of
 *           the array that is the first occurence of value inside of the array will be returned.
 *           This method will return the first occurence of value so multiple occurences is not an issue.
 *           If value does not occur in the array then -1 will be returned.
 * 
 * @param {Array}: array: The collection over which to iterate. Input as an arguement.
 * @param {Value}: value: Input as an argument.
 * 
 * @return {Number}: Returns the index of the matched value in the array. If the
 *                   value is not in the array, -1 will be returned.
 */
 function indexOf(array, value) {
    
     for(let i = 0; i < array.length; i++) {
         if(array[i] === value) {
             return i;
         }
     } return -1;
}
 module.exports.idexOf = indexOf;

/** contains: This function will test to see if an array contains an input value.
 *            If no value is given false is returned.
 *
 * @param {Array}: array: The collection over which to iterate. Input as an argument.
 * @param {any Value}: value : Input as an argument. The value to look for in the array. 
 *
 * @return {Boolean}: true -  If the array contains a value, returns a boolean value of true.
 * @return {Boolean}: false - If the array doesn't contain a value, returns a boolean value of false.
 */
 // return values are booleans
 function contains(array, value) {
    return array.includes(value) ? true : false;
}
 module.exports.contains = contains;
 
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 *       test function to each value in the collection.
 * 
 * @param {Array, Object} collection: The collection over which to iterate.
 * @param {Function} test: The function to be applied to each value in the collection.
 *                          
 */
 function each(collection, test) {
     if(Array.isArray(collection) === true) {
         for (let i = 0; i < collection.length; i ++) {
             test(collection[i], i, collection);
         }
     } else if(typeof collection === 'object' &&  collection !== null) {
              for(let key in collection) {
                  test(collection[key], key,  collection);
              }
         }
}
 module.exports.each = each;

/** unique:  This function removes duplicate values from a collection and retruns a new array 
 *           without the duplicates.
 *
 * @param {Array} array: Input as argument.
 *
 * @return{Array}: Returns a collection with elements that were pushed in having no duplicates.
 */
  function unique(array) {
      return array.filter((a, b) => array.indexOf(a) === b);
}
 module.exports.unique = unique;
 
/** filter: Iterates over elements in the collection to return an array of all the elements that are true.
 *          If the function produces something other than a boolean value, an empty array will be returned.
 * 
 * @param {Array} array: The collection over which to iterate. Input as an argument
 * @param {Function} test: The Function to be applied to each value in the collection. Input as argument.
 *                          It take three parameters: element, index, and collection.
 * 
 * @return {Array}: myArray: An array will be returned with only the values that past the test (returned true)
 */
 function filter (array, test){
     var myArray = [];
     _.each(array, function(element, index, array){
         if(test(element, index, array)){
             myArray.push(element);
         }
     });
     return myArray;
 }
 
 module.exports.filter = filter;
 
/** reject: Reject is the opposite of _.filter and this method returns an array that contains the elements 
 *          of the collection that do not return true.
 *
 * @param {Array} array: The collection over which to iterate. Input as an argument.
 * @param {function} test: The Function to be applied to each value in the collection. Input as an argument.
 *                         It take three parameters: element, index, and collection.
 * 
 * @return {Array}: newArray: collection: This will return a new array of elements that passed the test (or returned false)
 *
 */
 function reject (array, test){
    let newArray = [];
    _.filter(array, function(element, index, array) {
        if(!test(element, index, array)){
            newArray.push(element);
        }
    });
    return newArray;
}
 module.exports.reject = reject;

/** partition: Partition creates an array of elements split into two groups, an array of arrays.
 *
 * @param {Array} array: The collection over which to iterate. Input as as argument.
 * @param {function} test: The Function to be applied to each value in the collection. Input as an argument.
 *
 * @return {Array}: newArray:  An array will be returned that is made up of two sub arrays.
 *                             One array contains all of the truthy values, the other contains
 *                             all of the falsey values.
 *
 */
 function partition(array, test){
    var newArray = [];
    if (_.filter(array,test)){
        newArray.push(_.filter(array,test));
        newArray.push(_.reject(array,test));
    }
    return newArray;
   
}
 module.exports.partition = partition;

/** map: Map creates a new array of values by running a function on each element in the collection.
 *
 * @param {Array, Object} collection: The collection over which to iterate.
 * @param {function} test: The Function to be applied to each value in the collection.
 *                         It take three parameters: element, index, and collection.
 * 
 * @return {array} newArray:  A new array will be returned with the new values.
 */
 function map (collection, test){
    
    let newArray = [];
    _.each(collection, function(value, index, collection){
        newArray.push(test(value, index, collection));
    });
    return newArray;
}
 module.exports.map = map;

/** pluck: Pluck is used to extract a list of property values from an array of objects.
 *
 * @param {Array}: arrObj: The collection over which to iterate. An array of objects. Input as argument
 * @param:{property}: prop: Input as argument. The property to search for through the array of objects.
 *
 * @return {Array}: newArray: An array will be returned that contains the property value of input 
 *                            property for every object in the array.
 */
 function pluck (arrObj, prop) {
    return _.map(arrObj, function(value, index, collection){
        return value[prop];
    });
}
 module.exports.pluck = pluck;

/** every: Every is used to check if all elements in a collection return true.
 *         Iteration stops once an element returns false. If the Function argument is not provided,
 *         true will be returned for all the truthy elements and false will be returned if any are falsey.
 *         If Function does not produce a boolean than false will be returned.
 * 
 * @param {Array, Object}: collection: The collection over which to iterate. Input as argument.
 * @param {function}: test: The Function to be applied to each value in the collection. Input as argument.
 *                          It take three parameters for an array: element, index, and collection.
 *                          It take three parameters for an object: current value, current key, collection.
 * 
 * @return {Boolean}: true - Returns a boolean value of true if every element in the array is true
 * @return {Boolean}: false -  If just one of the elements returns false, return a boolean value of false
 */
 //returns a boolean
 function every(collection,test){
    var newArray = [];
     _.each(collection,function(element, index, collection){
         if(typeof test !== "function"){
             if(!element){
            newArray.push(element);}
         }else if(!test(element, index, collection)){
            newArray.push(element);
        }
    });
        if(newArray.length > 0){
        return false;
    }
        return true;
    
}
 module.exports.every = every;

/** some: Some will test to see if at least one element is true in the collection. If Function is not
 *        given then true will be returned if at least one element in collection is truthy.
 *        If Function does not produce a boolean than true will be returned for truthy elements,
 *        false otherwise.
 *
 * @param: {Array, Object}: collection: The collection over which to iterate. Input as argument.
 * @param: {function}: func: The Function to be applied to each value in the collection. Input as argument.
 *                           It take three parameters for an array: element, index, and collection.
 *                           It take three parameters for an object: current value, current key, collection.
 * 
 * @return {Boolean}: Returns a boolean value of true if element passes the test, otherwise it returns false.
 *
 */
 //returns a boolean
 function some(collection,func){
    var newArray = [];
     _.every(collection,function(element, index, collection){
         if(typeof func !== "function"){
             if(element){
            newArray.push(element);}
         }
        else if(func(element, index, collection)){
            newArray.push(element);
        }
    });
    if(newArray.length > 0){
        return true;
    }
        return false;
}
 module.exports.some = some;

/** reduce: Reduces a collection to a value which is the result of running each element
 *          in collection through iteration. Each time the function is called, it is supplied
 *          the return value of the previous result. A 'seed' parameter is supplied which represents
 *          the starting value of iteration. If seed is undefined than iteration will start at index zero.
 * 
 * @param {Array}: array: The collection over which to iterate. Input as argument.
 * @param {function}: test: The Function to be applied to each value in the collection. Input as argument.
 *                          It takes the parameters: previous result, element, index.
 * @param {Any Value}: seed: Input as argument. Seed is starting value of iteration.
 *
 * @return {Value}: Returns the value of the final function call.
 */
 function reduce(array, test, seed) { 
        let i;
        let previousResult;
        if(seed !== undefined && seed !== null) {
            i = 0;
            previousResult = seed;
        } else {
            previousResult = array[0];
            i = 1;
        }
         for(; i < array.length; i++) {  // loop over array
             previousResult = test(previousResult, array[i], i);
         }
         return previousResult;
}
 module.exports.reduce = reduce;

/** extend: Extend copies properties from one object to another object.
 *
 * @param: {Object}: obj1: The target object to be copied to. Input as argument.
 * @param: {Object}: obj2: The object to be copied from. Input as argument.
 * @param: {Object}: ...theArgs: Indefinite number of objects can be used.
 *
 * @return {object}: obj1: Returns the updated object.
 */
 function extend(obj1, obj2, ...theArgs) {
       Object.assign(obj1, obj2);
       Object.assign(obj1, ...theArgs);
       return obj1;
}
 module.exports.extend = extend;
