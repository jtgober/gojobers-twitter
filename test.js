import { data } from './tweets.js'
let dataLength = data.length
console.log(dataLength)
let selectAtRandom = data[Math.floor(Math.random() * data.length)]
console.log(selectAtRandom);