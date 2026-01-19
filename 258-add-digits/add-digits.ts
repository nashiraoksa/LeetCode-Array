function sumDigits(arr: string[]){
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i]);
    }
    
    return sum;
}


function addDigits(num: number): number {
    let sum = 0;
    let numArr = num.toString().split('');

    if(numArr.length === 1) {
        return num;
    }
   
    while(numArr.length > 1){
        sum = sumDigits(numArr);
        numArr = sum.toString().split('');
    }
    
    return sum;
};