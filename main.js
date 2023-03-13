//Two digit number in an array
var a=[123,34,67,765,2,87,567,4];
function twoDigitNumber(a){
    let nA=[];
    for(i=0;i<a.length;i++){      
    

if((a[i]>=10)&&a[i]<100){
    nA.push(a[i]);
}

    }
return nA 
}
document.write(twoDigitNumber(a));
