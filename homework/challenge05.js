 /* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/
function stringy(size){
    var str= ''
    
    for(var i=1; i <= size; i++){
    if(i%2!==0){
        str += '1';
    }else{
        str += '0';

    }
    }

return str;
    }
console.log(stringy(10));