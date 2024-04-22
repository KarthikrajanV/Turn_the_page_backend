const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { run } = require('./GeminiConfig');

const app = express();
require('dotenv').config();
const port = process.env.PORT;
app.use(express.json());
app.use(cors())

app.post('/generate-story', async (req, res) => {
    try {
      const { genre, title, synopsis } = req.body;
      const prompt = `Give me a story with Title: ${title}\n and with Genre: ${genre}\n using this Synopsis: ${synopsis} dont give any heading just give the story paragraph`;
      const response = await run(prompt);
      res.json({ success: true, response });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  });

app.listen(port,()=>{
    console.log(`Connected to port ${port}`);
})
