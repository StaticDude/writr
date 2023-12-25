const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/writr', {useNewUrlParser: true, useUnifiedTopology: true});

const TextModel = mongoose.model('Text', { content: String });

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/save', async (req, res) => {
    const { content } = req.body;

    try {
        const newText = new TextModel({ content });
        await newText.save();
        res.json({ success: true, message: 'Text saved successfully.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error saving text.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
