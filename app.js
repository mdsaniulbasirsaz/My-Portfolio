const express = require('express');
const axios = require('axios');
const path = require('path'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'styles')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  
});
app.get('/Education', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  
});
app.get('/project', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
