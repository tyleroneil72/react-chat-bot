const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });
// Openai configuration information
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);
const gptModel = process.env.MODEL; // This is the model that is used for the chatbot eg. gpt-4, gpt-3.5, gpt-3.5-turbo, etc

// This function will return the response from the chat completion API
async function callGPT(promptContent, systemContent, previousChat) {
  try {
    const messages = [];

    const userPrompt = {
      role: "user",
      content: promptContent,
    };
    const systemPrompt = {
      role: "system",
      content: systemContent,
    };
    const assistantPrompt = {
      role: "assistant",
      content: previousChat,
    };
    // Messages will contain all the information needed for the api to have context
    messages.push(userPrompt);
    messages.push(systemPrompt);
    messages.push(assistantPrompt);

    const response = await openai.createChatCompletion({
      model: gptModel,
      messages: messages,
    });

    // This is for debugging purposes
    console.log(0);
    console.log(promptContent);
    console.log(1);
    console.log(response.data.choices[0].message.content);
    // Contains the response from the chat completion API
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    return `An error occurred while processing the request: ${error}`;
  }
}

module.exports = { callGPT };
