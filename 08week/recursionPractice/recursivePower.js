let recursivePower = function(i){
if(i=0){
    return 1;
} else{
    let before = recursivePower(i-1);
    return before * 2;
}

}

let interativePower = function(i){
    let product = 1;
    for(let x=1; x<=i; x++){
        product = product * 2;
    }
    return product;
}

for(let i=0; i<10; i++){
    console.log(recursivePower(i));
    console.log(interativePower(i));
}