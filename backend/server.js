const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for frontend to connect
app.use(express.json());

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from Express backend!" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
