// 1,1,2,3,5,8,13,21,34..

//let get 

let recursivePrint = function(i){
    if(i==0){
        console.log(i);
    }
    else {
       console.log(i);
       recursivePrint(i-1);
    }
}

recursivePrint(10)