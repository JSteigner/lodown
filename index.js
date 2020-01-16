// YOU KNOW WHAT TO DO //


/**
 * identity: The identity Function returns an input value unaltered. 
 * 
 * @param {Any Value} value: This value can be any datatype.
 * 
 * @return {Any Value}: The same value as input will be returned unaltered. 
 */
 
 function identity(value){
    return value;
}
module.exports.identity = identity;
// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode



/** typeOf: The typeOf Function will accept any data type input and return a string of that data type.
 *
 * @param: {Any data type} value : Any data type can be input.
 *
 * @return {String} :  The return value will be a string of the data type value.
 */    
   
 function typeOf(value){
    if (Array.isArray(value)){
        return "array";
   }else if(value === null){
        return "null";
   }
    return typeof value;  
}
 module.exports.typeOf = typeOf;

/** first: The first Function will return the first number of elements that correspond to an input number.
 *         If the input number is greater than the length of the array then the array will be returned. If the input number is 
 *         negative or not a number then an empty array will be returned.
 * 
 * @param {Array} array: An optional input array that will be scanned over. This Array may not exist or have a value.
 * @param {Number}: firstNum: An input number that represents the first number of elements that will be returned.
 *
 * @return {Value}: arrayResult:  The elements that correspond to the first input number from the beginning of array will be returned.
 */
 function first(array, firstNum){
    let arrayResult = [];
    if (isNaN(firstNum) === true) {
        return array[0];
    } if (firstNum < 0) {
        return arrayResult;
    } else if(Array.isArray(array) === false) {
        return arrayResult;
    } else if(firstNum > array.length) {
        return array;
    } for(let i = 0; i < firstNum; i++) {
            arrayResult.push(array[i]);
        }  return arrayResult;
}
 module.exports.first = first;

/** last: The last Function will output the last number of elements of an array. It takes two parameters,
 *        an array and a number representing the number of elements from the end of the array to return. An empty array 
 *        will be returned if no array parameter is supplied. If no number is given or is NaN, then the last element of the array 
 *        will be returned. If the input number is greater than the array length, the whole array will be returned.
 *
 * @param {Array}: array: An optional input array to iterate over. 
 * @param {Number}: num:  The number parameter repesents the number of elements from the end of the array that will be returned.
 *                        If the number is not given or is NaN, then the last element of array will be returned.
 * 
 * @return {Array}: arrResult:  If the input array is a different data type than an array or if the input number is not given then an 
 *                   empty array will be returned. The whole input array will be returned if the input number is greater than the length of the array.
 *                   If the input number is not given or it is not a number then the last element of the array will be returned.
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

/** indexOf: The indexOf Function takes two parameters, an input array and a value. It is designed to return the index of the first
 *           occurrence of the input value in the array. Multiple occurrences of the value is not an issue because this function returns
 *           the index at the first occurrence. If the value does not exist in the array then -1 will be returned.
 * 
 * @param {Array}: array: The input array that will be scanned over.
 * @param {Any Value}: val: A value to look for in array.
 * 
 * @return {Number}: The index of the first occurrence of the value found in the array will be returned. If the value is not found
 *                   negative one will be returned.
 *                   
 */
 function indexOf(array, val) {
    
     for(let i = 0; i < array.length; i++) {
         if(array[i] === val) {
             return i;
         }
     } return -1;
}
 module.exports.idexOf = indexOf;

/** contains: The contains Function will test to see if a value exists in an array. It returns true if the value does exist
 *            and if not a value of false is returned. If no value is given then false will be returned.
 *
 * @param {Array}: array: An input array to scan over. 
 * @param {any Value}: value : The value to search for in the input array. 
 *
 * @return {Boolean}: A boolean value of true is returned if the value does occur in the array. If not then a false value 
 *                    is returned.
 */
 
 function contains(array, value) {
    return array.includes(value) ? true : false;
}
 module.exports.contains = contains;
 
/**
 * each: The each function takes two parameters, a collection and a callback function. It's purpose is to iterate over the collection 
 *       and apply the callback function to each element. No return value is returned.
 * 
 * @param {Array, Object} collection: An input array or object that will be acted upon.
 * @param {Function} action: The callback function that will be applied to each element.
 *                          
 */
 function each(collection, action) {
     if(Array.isArray(collection) === true) {
         for (let i = 0; i < collection.length; i ++) {
             action(collection[i], i, collection);
         }
     } else if(typeof collection === 'object' &&  collection !== null) {
              for(let key in collection) {
                  action(collection[key], key,  collection);
              }
         }
}
 module.exports.each = each;

/** unique:  The unique Function iterates through an input array and returns a new array with all duplicate values removed.
 *
 * @param {Array} array: The input array to scan over.
 *
 * @return {Array}: A new array is returned containing no duplicate values.
 */
  function unique(array) {
      return array.filter((a, b) => array.indexOf(a) === b);
}
 module.exports.unique = unique;
 
/** filter: The filter Function accepts two parameters, a collection and a callback function. It scans through the collection 
 *          and applies the callback function to each element in the collection. All values that result to true after the function
 *          has been called on them will be saved and returned in a new array. If the function produces something 
 *          other than a boolean value, an empty array will be returned.
 *         
 * @param {Array or Object} collection: The input collection that is scanned over.
 * @param {Function} test: The callback function that will be applied to each element in the collection. 
 *                         It takes three parameters: element, index, and collection.
 * 
 * @return {Array}: myArray: A new array is returned that contains all the values that have true results after 
 *                  the callback function has been applied. If a value other than a boolean is produced, elements containing
 *                  truthy values will be returned in the new array.
 */
 function filter (collection, test){
     var myArray = [];
     each(collection, function(element, index, collection){
         if(test(element, index, collection)){
             myArray.push(element);
         }
     });
     return myArray;
 }
 
 module.exports.filter = filter;
 
/** reject: The reject Function takes two parameters, a collection and a callback function. The function is applied to each element
 *          and all the elements that have false values will be returned in a new array. 
 *
 * @param {Array or Object} collection: The input collection that is scanned over.
 * @param {function} test: The callback function to be applied to each element in the collection.
 *                         It takes three parameters: element, index, and collection.
 * 
 * @return {Array}: newArray: A new array will be returned containing all the elements thats value resulted in false. If the value produced
 *                            is not a boolean then the elements that have falsey values will be returned.
 *
 */
 function reject (collection, test){
    let newArray = [];
    filter(collection, function(element, index, collection) {
        if(!test(element, index, collection)){
            newArray.push(element);
        }
    });
    return newArray;
}
 module.exports.reject = reject;

/** partition: The partition Function accepts two parameters, an array and a callback function. This function
 *             creates an array of two sub arrays. One array will contain all the values that result to true and the 
 *             other array will contain all of the values that result to false.
 *                            
 * @param {Array} array: The input array to iterate over.
 * @param {function} test: The callback function to be applied to each element in the array.
 *
 * @return {Array}: newArray:  An array will be returned that is made up of two sub arrays.
 *                             One array containing all of the truthy values and the other containing
 *                             all of the falsey values.
 */
 function partition(array, test){
    var newArray = [];
    if (filter(array,test)){
        newArray.push(array.filter(test));
        newArray.push(array.reject(test));
    }
    return newArray;
   
}
 module.exports.partition = partition;

/** map: The map Function accepts two parameters, a collection and a callback function. The collection will be iterated over 
 *       and the callback function will be applied to each element. The modified values will be returned in a new array.
 *
 * @param {Array, Object} collection: The collection of values that will be scanned over. An array or object can be input.
 * @param {function} test: The callback function that will be applied to each value in the collection.
 *                         It take three parameters: element, index, and collection.
 * 
 * @return {array} newArray:  A new modified array will be returned containing the new values.
 */
 function map (collection, test){
    
    let newArray = [];
    each(collection, function(value, index, collection){
        newArray.push(test(value, index, collection));
    });
    return newArray;
}
 module.exports.map = map;

/** pluck: The pluck Function is used to iterate over an array of objects, looking for a common input property,
 *         and if the key exists it will push those corresponding values from all the matching objects
 *         into a new array.
 *
 * @param {Array}: arrObj: An array of objects is input into this function. 
 * @param {String}: key: The property key to scan for through the array of objects.
 *
 * @return {Array}: newArray: An array will be returned that contains the matching property key value of the input 
 *                            key for every object in the array.
 */
 function pluck (arrObj, key) {
    return map(arrObj, function(value, index, collection){
        return value[key];
    });
}
 module.exports.pluck = pluck;

/** every: The every Function takes two parameters, a collection and a callback function. This function is designed to check if every 
 *         element in the collection contains a true value after being affected by the callback function. The iteration will stop
 *         once a false value is returned. If no Function parameter is passed in then a true boolean value will be returned for all 
 *         the truthy elements and false will be returned if any are falsey. If the callback function does not produce a boolean than 
 *         false will be returned.
 * 
 * @param {Array, Object}: collection: The input array or object that will be used for iteration.
 * @param {function}: test: The callback function that will be applied to each value in the collection.
 *                          It take three parameters for an array: element, index, and collection.
 *                          It take three parameters for an object: current value, current key, collection.
 * 
 * @return {Boolean}:  A boolean value of true will be returned if every element in the array is true.
 *                     If just one of the elements returns false, a boolean value of false will be returned.
 */
 
 function every(collection,test){
    var newArray = [];
     each(collection,function(element, index, collection){
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

/** some: The some Function will test to see if at least one element is true in the collection. It takes two parameters, a collection and a
 *        callback function. If at least one of the values has a true value after the callback function has been applied then a true boolean
 *        value will be returned. If the callback function is not given then true will be returned if at least one element in the collection is truthy.
 *        If the callback function does not produce a boolean value than true will be returned for truthy elements, and false will be returned otherwise.
 *
 * @param: {Array, Object}: collection: An object or array can be used as an input collection. This collection will be scanned over.
 * @param: {function}: func: The callback function that will be applied to each element in the collection.
 *                           It take three parameters for an array: element, index, and collection.
 *                           It take three parameters for an object: current value, current key, collection.
 * 
 * @return {Boolean}: A true boolean value will be returned if at least one element results in a true value. If no elements result in true than false 
 *                    will be returned. If no function is given than true will be returned if at least one element has a truthy value and false
 *                    will be returned otherwise.
 *
 */
 
 function some(collection,func){
    var newArray = [];
     every(collection,function(element, index, collection){
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

/** reduce: The Reduce Function reduces a collection down to a single value by applying the callback function to each element in the array. 
 *          It takes three parameters, an array, a callback function, and an optional seed parameter. The optional seed parameter, when supplied, 
 *          represents the initial value to use for the first callback previous value parameter. The callback function supplied as a parameter takes 
 *          three parameters as well, a previous value, a current value, and the current index. Each time the callback function is called, it is 
 *          supplied the return value of the previous result into its previous result parameter. If the seed is undefined than the initial value will 
 *          be the first element in the array and then iteration will start from the first index instead of the zero index.
 * 
 * @param {Array}: array: The array to which the callback function will be applied.
 * @param {function}: test: The callback function that will be applied to each value in the array. It takes the parameters: previous result, 
 *                          current value, and index.
 * @param {Any Value}: seed: The optional seed parameter, when supplied, is the initial value used as the first value for the previous result
 *                           parameter of the callback function. This is ultimately the type of data that will be output.
 *
 * @return {Value}: The return value is supplied by the final function call. If a seed was applied then this output data type will match the seed 
 *                  data type.
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

/** extend: The extend Function copies properties from at least one other object to a target object. The target object will be supplied in the first
 *          parameter. An indefinite number of objects can be used as arguments to copy to the first target object. If a property value already exists 
 *          in the target object then the value will be updated with the values from the other objects.
 *
 * @param: {Object}: obj1: This is the target object that will be copied to.
 * @param: {Object}: obj2: This is the object that will be copied from.
 * @param: {Object}: ...theArgs: This represents the indefinite number of objects that can be used.
 *
 * @return {object}: obj1: An updated object with new property values will be returned.
 */
 function extend(obj1, obj2, ...theArgs) {
       Object.assign(obj1, obj2);
       Object.assign(obj1, ...theArgs);
       return obj1;
}
 module.exports.extend = extend;
