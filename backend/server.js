import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/predict', async (req, res) => {
    try {
        const { newsText } = req.body;
        const response = await axios.post('http://127.0.0.1:5000/predict', { newsText });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error connecting to ML model' });
    }
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
