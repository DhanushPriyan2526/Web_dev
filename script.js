// var a= prompt("Enter the number : ")
var a =90
console.log("Number : "+ a)
if (a>0) {
    console.log("positive")
}
else if (a==0){
    console.log("Zero")
}
else {
    console.log("negative")
}

for (i=0 ;i<5 ;i++) {
    console.log(i)
   
}
var j=0
while (j<5) {
    console.log(j)
    j++
}

var array=[12,23]
console.log(array)
array.forEach(element => console.log(element))

for (i=0 ;i<array.length;i++){
    console.log(array[i])
}