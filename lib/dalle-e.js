import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export const generateImage = async (prompt) => {
  const apiKey = process.env.CHAT_KEY;
  const API_ENDPOINT = "https://api.openai.com/v1/images/generations";
  try {
    const response = await axios.post(API_ENDPOINT, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      data: {
        model: "image-alpha-001",
        prompt: prompt,
        num_images: 1,
        size: "512x512",
        response_format: "url",
      },
    });

    const imageUrl = response.data.data[0].url;

    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  
    const image = await loadImage(imageResponse.data);
  
    const canvas = createCanvas(512, 512);
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, 512, 512);
  
    return promisify(canvas.toBuffer.bind(canvas))();
  } catch (error) {
    console.error(`Error generating image: ${error}`);
    return null;
  }
};

console.log(await generateImage('banana chair'));