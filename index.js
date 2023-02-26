import Twit from "twit";
import dotenv from "dotenv";
import { chatGPT } from "./lib/chatGPT.js";
import { generateDalleImage } from "./lib/dalle-e.js";
import { getRandomPokemon } from "./lib/poke-api.js";
import util from "util";
import fs from "fs";
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config();

const T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const tweet = async (prompt, status) => {
  const imageData = await generateDalleImage(prompt);
  const mediaFilePath = path.join(__dirname, "temp", "dalle.png");

  // Write the image buffer to a temporary file
  await util.promisify(fs.writeFile)(mediaFilePath, imageData);

  // Upload the media file to Twitter
  const mediaUpload = util.promisify(T.postMediaChunked.bind(T));
  const mediaUploadResponse = await mediaUpload({ file_path: mediaFilePath });

  // Remove the temporary file
  await util.promisify(fs.unlink)(mediaFilePath);

  // Create the tweet with the uploaded media
  const tweet = {
    status: tweetText,
    media_ids: [mediaUploadResponse.media_id_string],
  };

  // Post the tweet
  const post = util.promisify(T.post.bind(T));
  const postResponse = await post("statuses/update", tweet);

  return postResponse;
};
// Example usage:
tweet(
  "a cute cat with glasses",
  "Check out this adorable cat I generated with DALL-E! #dalle #cat"
);
