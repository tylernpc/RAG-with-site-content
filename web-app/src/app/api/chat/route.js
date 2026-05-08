import { initChatModel } from "langchain";

const openAiApiKey = process.env.OPENAI_API_KEY;
const model = await initChatModel("gpt-5.4");