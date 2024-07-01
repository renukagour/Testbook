const http = require('http');
const fs = require('fs');
const path = require('path');

// Create 'uploads' directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads'); // where uploaded data to be stored in upload folder all uploaded files will be stored
if (!fs.existsSync(uploadsDir)) { // check if path or directory or file not  exists
    fs.mkdirSync(uploadsDir);       // make folder
}

// const datafile =path.join(__dirname,'datafile');
// console.log(datafile);

// Create a server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // Serve the HTML form
        fs.readFile(path.join(__dirname, 'fileExtension.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'POST' && req.url === '/upload') {
        // Handle file upload
        let body = '';
        
        // Collect data chunks
        req.on('data', chunk => {
            body += chunk;
        });
        
        // When all data is received
        req.on('end', () => {
            // console.log('Received data:', body);
            
            // Extract file data from request body
            const fileData = body.split('\r\n')[4];
            const fileName = body.split('\r\n')[1].split('; ')[2].split('=')[1].replace(/"/g, '');
            
            console.log('File name:', fileName);

            // Check if a file was uploaded
            if (!fileData) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('No file uploaded');
                return;
            }

            // Check file extension
            const allowedFileTypes = /jpeg|jpg|png/;
            const extname = allowedFileTypes.test(path.extname(fileName).toLowerCase());
            if (!extname) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Only JPEG, JPG, and PNG files are allowed!');
                return;
            }

            // Decode and save the file
            const decodedFileData = Buffer.from(fileData, 'base64');
            fs.writeFile(path.join(uploadsDir, fileName), decodedFileData, (err) => {
                if (err) {
                    console.error('Error saving file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end('<h1>File uploaded successfully!</h1>');
                }
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
const PORT = process.env.PORT || 3003;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
