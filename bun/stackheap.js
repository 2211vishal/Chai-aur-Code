// stack(Primitive) when we use stack memory you declare varible you get the copy of these varible
//   Heap(Non-Primitive) when heap memory used like define object you get original value reference the origial value change.


let name="vishalogale"       // satck madhe eka value chi copy hote ani original value change hot nahi
let anothername=name        // heap madhe orignal value change hote karan tychi copy banat nahi original value cha reference milto    
anothername="raja"
console.log(name);
console.log(anothername);


let uone={

    email:"vishal@2211",
    pass:"123",
}

let utwo=uone
utwo.email="raja@babu"    // using heap the uone and utwo values are changed and they are same because the values are same output same
console.log(utwo.email);
console.log(uone.email);

