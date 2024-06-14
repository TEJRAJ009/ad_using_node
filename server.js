const express = require('express');
const request = require('request');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/proxy', (req, res) => {
    const adUrl = 'https://2no.co/RN99X2';
    const options = {
        url: adUrl,
        headers: {
            'X-Forwarded-For': '0.0.0.0' // Mask IP address
        }
    };

    request(options).pipe(res);
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
