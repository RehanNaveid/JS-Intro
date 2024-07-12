function checkAge(age){
    if (age>=18){
        console.log("Adult");
    }
    else{
        console.log("Minor");
    }
}

checkAge(20);

function printNumbers(n){
    for (i=0;i<=n;i++){
        console.log(i);
    }
}

printNumbers(10);

function countdown(start){
    let i=start;
    while(i>0){
        console.log(i);
        i--;
    }
}

countdown(5);

function printOddNumbers(n){
    for (i=0;i<=n;i++){
        if(i%2==0){
            continue;
        }
        console.log(i);
    }
}

printOddNumbers(20);

function findFirstMultiple(n,multiple){
    for(i=1;i<=n;i++){
        if (i%multiple==0){
            return i;
            break;
        }
    }
}

console.log(findFirstMultiple(50,2));
