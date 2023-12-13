const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const logFilePath = path.join(__dirname, 'data.log');

// Create a writable stream to the log file
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

console.log('Log file path:',logFilePath);

app.all('/api/data', (req, res) => {
    //debug('Request received at /api/data:', req.method);

    if (req.method === 'POST') {
        const { fromLoc, toLoc, ada } = req.body;
        const receivedData = { fromLoc, toLoc, ada };

        //debug('Received data:', receivedData);

        console.log('Received data:', { fromLoc, toLoc, ada });

        // Log the received data to the log file
        logStream.write(JSON.stringify(receivedData) + '\n', (error) => {
            if (error) {
                console.error('Error writing to log file:', error);
            }
        });

        res.json({ message: 'Data received successfully', data: { fromLoc, toLoc, ada } });
    } 
    // else if (req.method === 'GET') {
    //     // Handle GET requests (for testing purposes)
    //     res.send('This is a GET request to /api/data. Remove this block after testing.');
    // }
    else {
        // Handle other HTTP methods if needed
        res.status(405).send('Method Not Allowed');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
