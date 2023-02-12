import { chatGPT } from "./chatGPT.js";

const text = `Letting ChatGPT ask us questions: ${await chatGPT(`Ask me a question instead. Dont give me any answers`)} #ChatGPT #AI`
console.log(text);