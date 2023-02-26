import axios from "axios";
import * as dotenv from "dotenv";
import Twit from "twit";
dotenv.config();
const apiKey = process.env.CHAT_KEY;
const API_ENDPOINT = "https://api.openai.com/v1/images/generations";

const T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

export const generateDalleImage = async (prompt) => {
  const response = await axios.post(
    API_ENDPOINT,
    {
      model: "image-alpha-001",
      prompt: prompt,
      num_images: 1,
      size: "512x512",
      response_format: "url",
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  const imageUrl = response.data.data[0].url;
  const imageData = await axios.get(imageUrl, {
    responseType: "arraybuffer",
  });
  const mediaUploadResponse = await T.post("media/upload", {
    media_data: imageData.data.toString("base64"),
  });
  const mediaId = mediaUploadResponse.data.media_id_string;
  const tweetResponse = await T.post("statuses/update", {
    status:
      "Some of the cutest animals in the world #animals #cute #love #AI #DALLE",
    media_ids: [mediaId],
  });

  return tweetResponse.data;
};

let randomNumber = () => {
  // min and max included
  return Math.floor(Math.random() * 14) + 1;
};
let myNum = randomNumber();
console.log("🚀 ~ file: chatGPT.spec.js:8 ~ myNum:", myNum);

switch (myNum) {
  case 1:
    await generateDalleImage("cute dog");
    break;
  case 2:
    await generateDalleImage("cute cat");
    break;
  case 3:
    await generateDalleImage("cute Red panda");
    break;
  case 4:
    await generateDalleImage("cute Koala");
    break;
  case 5:
    await generateDalleImage("cute Penguin");
    break;
  case 6:
    await generateDalleImage("cute Otter");
    break;
  case 7:
    await generateDalleImage("cute Hedgehog");
    break;
  case 8:
    await generateDalleImage("cute Sloth");
    break;
  case 9:
    await generateDalleImage("cute fox");
    break;
  case 10:
    await generateDalleImage("cute Raccoon");
    break;
  case 11:
    await generateDalleImage("cute axolotl");
    break;
  case 12:
    await generateDalleImage("cute Raccoon");
    break;
  case 13:
    await generateDalleImage("cute Panda");
    break;
  case 14:
    await generateDalleImage("cute sea otter");
    break;
  default:
    await generateDalleImage("cute axolotl");
}
