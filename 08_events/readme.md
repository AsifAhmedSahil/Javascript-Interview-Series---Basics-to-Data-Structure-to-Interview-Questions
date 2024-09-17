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
        e.stopPropagation()
    }, true)
```

# output:
```
    clicked inside the ul
    owl clicked
```


