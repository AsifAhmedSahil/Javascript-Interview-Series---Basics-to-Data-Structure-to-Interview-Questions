-> in javascript events run in sequentially
exception async ***

direct link onclick is not better approach
for react it is scalable 

target id from document and then onlcick is also not better approach
```
document.getElementById('owl').onclick = function(){
        alert("owl clicked")
     }
```

e == event object

## important
type, timestamp, defaultPrevented
target, toElement, srcElement, currentTarget,
clientX, clientY, screenX, screenY
  altkey, ctrlkey, shiftkey, keyCode

# Event propagation 
there are two process -- event bubling & event capturing

use default === event bubling == false by default

# bubling up == inner element to upper element like a bubble low to high 
## use -> {false}

```
document.getElementById('images').addEventListener('click', function(e){
        console.log("clicked inside the ul");
    }, false)

    document.getElementById('owl').addEventListener('click', function(e){
        console.log("owl clicked");
        
    }, false)
```

# output:
```
    owl clicked
    clicked inside the ul
```

# capturing == top to bottom -> use {true}

```
    document.getElementById('images').addEventListener('click', function(e){
        console.log("clicked inside the ul");
    }, true)

    document.getElementById('owl').addEventListener('click', function(e){
        console.log("owl clicked");
        
    }, true)
```

# output:
```
    clicked inside the ul
    owl clicked
```

# stop propagation for bubling use -> e.stopPropagation()

```
document.getElementById('images').addEventListener('click', function(e){
        console.log("clicked inside the ul");
    }, true)

    document.getElementById('owl').addEventListener('click', function(e){
        console.log("owl clicked");
        e.stopPropagation()
    }, true)
```

explore events 


<!-- settitme out and clear  time out  -->
## SetTimeout & ClearTimeout

settimeout call korar por oita ke jodi akta variable e set kori then stop button click korar por jodi clearTimeout call kori and oi cleartime out er moddeh setTimeout er reference ta dia dee then r setTimeOut call hobe na****

```
     const changeText = function(){
        document.querySelector("h1").innerHTML = "best javascript course "

    }

    const changeMe = setTimeout(changeText, 2000);

    document.querySelector("#stop").addEventListener("click",function(){
        clearTimeout(changeMe)
    })
```



### Async Javascript notes

# javascript asynchronous language but it's default behaviour is synchronous

-> javascript default behaviours is 1/ synchronous 2/ single threaded
-> execute line one by one == each completion wait for the last one to complete before completion

# Blocking code Vs non-blocking code

Blocking === file read sync

Non-Blocking === file read async



