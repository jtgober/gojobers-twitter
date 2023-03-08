/* eslint-disable no-undef */
import Twit from "twit"
import dotenv from "dotenv"
const selectAtRandom = data[Math.floor(Math.random() * data.length)]
dotenv.config()

const T = new Twit({
	consumer_key: process.env.API_KEY,
	consumer_secret: process.env.API_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET
})
const tweet = () => {
	const text = selectAtRandom

	const onFinish = (err, reply) => {
		if (err) {
			console.log("Error: ", err.message)
		} else {
			console.log("Success: ", reply)
		}
	}

	T.post("statuses/update", { status: text }, onFinish)
}

tweet()
console.log(tweet)
