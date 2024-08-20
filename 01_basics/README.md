
### Javascript series notes
# Lecture  # 1:
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])

# Lecture  # 2:
number = 2 ^ 53
bigint = for large numbers
string = "assembly of characters"
boolean = true or false
null = stand alone value (type = object)
undefined = kindda place holder for a value which is not defined yet (type = undefined)
symbol = uniquness


# "use strict";   treat all code as newer version of JS

### datatype Summary  - Interview imp***

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

## stack & heap
stack == (premitive data type) && heaps == (non-premitive data type)

stack refer copy of the data and if change the data then the original one remains constants.

heap refer direct original data then if change data then both are change, for example of one object contains user email then if refer the object and change the email then it change both objects. 