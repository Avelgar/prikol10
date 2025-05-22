const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const instanceNum = process.env.INSTANCE_NUM || 'unknown';
console.log(`Starting User instance ${instanceNum}`);
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'user.html'));
});

app.listen(PORT, () => {
    console.log(`User  server is running on http://localhost:${PORT}`);
});
