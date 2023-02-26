import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
import { createCanvas, loadImage } from "canvas";
const apiKey = process.env.CHAT_KEY;
const API_ENDPOINT = "https://api.openai.com/v1/images/generations";

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

  const imageResponse = await axios.get(imageUrl, {
    responseType: "arraybuffer",
  });

  const image = await loadImage(imageResponse.data);

  const canvas = createCanvas(512, 512);
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, 512, 512);

  const imageData = canvas.toBuffer();

  return imageData;
};

console.log(await generateDalleImage("cute cat"));
