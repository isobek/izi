function checkDiv(i) {
    if(i%3==0) {
        console.log(i+" is divisible by 3");
    } else if(i%5==0) {
        console.log(i+" is divisible by 5");
    }
    if(i%3==0 && i%5==0) {
        console.log(i+" is divisible by both 3 and 5");
    }
}

checkDiv(2);
checkDiv(3);
checkDiv(6);
checkDiv(10);
checkDiv(15);
checkDiv(30);