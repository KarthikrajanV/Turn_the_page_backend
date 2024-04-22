const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config()
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(input) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = input

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(`Gemini Responce ${text}`);
  return text;
}

module.exports = {run};

