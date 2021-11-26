var buffer1=Buffer.alloc(20)
var buffer2=Buffer.from("Hi im a buffer")


console.log("buffer alloc ")
console.log(buffer1)

console.log("buffer with characters ")
console.log(buffer2)

console.log(buffer2[0])
console.log(buffer2[0].toString())