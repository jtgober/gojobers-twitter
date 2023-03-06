import { chatGPT } from './chatGPT.js'
let randomNumber = () => {
	// min and max included
	return Math.floor(Math.random() * 10) + 1
}
let myNum = randomNumber()
console.log('🚀 ~ file: chatGPT.spec.js:8 ~ myNum:', myNum)

switch (myNum) {
case 1:
	console.log(await chatGPT('generate a cute prompt for a realistic dog'))
	break
case 2:
	console.log(await chatGPT('generate a cute prompt for a realistic cat'))
	break
case 3:
	console.log(await chatGPT('generate a cute prompt for a realistic dog'))
	break
case 4:
	console.log(await chatGPT('generate a cute prompt for a realistic cat'))
	break
case 5:
	console.log(await chatGPT('generate a cute prompt for a realistic dog'))
	break
case 6:
	console.log(await chatGPT('generate a cute prompt for a realistic cat'))
	break
case 7:
	console.log(await chatGPT('generate a cute prompt for a realistic dog'))
	break
case 8:
	console.log(await chatGPT('generate a cute prompt for a realistic cat'))
	break
case 9:
	console.log(await chatGPT('generate a cute prompt for a realistic dog'))
	break
case 10:
	console.log(await chatGPT('generate a cute prompt for a realistic cat'))
	break
default:
	console.log(
		await chatGPT('generate a cute prompt for a realistic axolotl')
	)
}
