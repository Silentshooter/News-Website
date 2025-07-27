require('dotenv').config();
const express = require('express');
const { OpenAI } = require('openai');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
  const { message, newsData } = req.body;

  try {
    const assistant = await openai.beta.assistants.create({
      name: "Trendy News Assistant",
      instructions: `You are an AI assistant for Trendy News, a news website. Use the provided news data to answer questions about the latest news, summarize articles, or recommend content. If no news data is available, suggest checking the homepage. If you don't know the answer, suggest visiting the Contact Us page at /contact-us.`,
      model: "gpt-3.5-turbo",
    });

    const thread = await openai.beta.threads.create();
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: `${message}\n\nNews Data: ${JSON.stringify(newsData)}`,
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistant.id,
    });

    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    while (runStatus.status !== 'completed') {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    const messages = await openai.beta.threads.messages.list(thread.id);
    const response = messages.data[0].content[0].text.value;

    res.json({ response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));