import Twit from "twit";
import dotenv from "dotenv";
import { chatGPT } from "./lib/chatGPT.js";

dotenv.config();

const T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});
const tweet = async () => {
    const text = `Letting ChatGPT ask us questions: ${await chatGPT(`Ask me a question instead. Dont give me any answers`)} #ChatGPT #AI`

  const onFinish = (err, reply) => {
    if (err) {
      console.log("Error: ", err.message);
    } else {
      console.log("Success: ", reply);
    }
  };

  T.post("statuses/update", { status: text }, onFinish);
};

tweet();
console.log(tweet);
