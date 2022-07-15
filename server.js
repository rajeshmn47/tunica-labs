function insertionsort(arr){
var i=1;
var j=i-1;
while(i<arr.length){
    var k=arr[i]
    while(j>=0&&arr[j]>=k){
arr[j]=arr[j+1]
j=j-1
    }
    arr[j+1]=k
    i=i+1
}
return arr;
}
var f=[1,4,2,3,1,0,5,3]
console.log(insertionsort(f))