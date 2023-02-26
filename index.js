import Twit from "twit";
import dotenv from "dotenv";
import { chatGPT } from "./lib/chatGPT.js";
import { generateImage } from "./lib/dalle-e.js";
import { getRandomPokemon } from "./lib/poke-api.js";

dotenv.config();

const T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const tweet = async (prompt, status) => {
  const imageData = await generateImage(prompt);
  const mediaUploadResponse = await twit.post("media/upload", {
    media_data: imageData.toString("base64"),
  });
  const mediaIdStr = mediaUploadResponse.data.media_id_string;
  const tweet = {
    status: status,
    media_ids: [mediaIdStr],
  };

  const tweetResponse = await twit.post("statuses/update", tweet);

  console.log("Tweet posted:", tweetResponse.data.text);
};

// Example usage:
postDalleImage(
  "a cute cat with glasses",
  "Check out this adorable cat I generated with DALL-E! #dalle #cat"
);
