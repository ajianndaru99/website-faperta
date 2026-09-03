import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.json': 'application/json'
};

const distDir = path.resolve('dist');

const server = http.createServer((req, res) => {
  try {
    let cleanUrl = decodeURIComponent(req.url.split('?')[0]);
    let relPath = cleanUrl.replace(/^\/+/, '');
    let filePath = path.join(distDir, relPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    if (!fs.existsSync(filePath)) {
      filePath = path.join(distDir, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mime[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
        return;
      }
      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': data.length,
        'Cache-Control': 'no-cache'
      });
      res.end(data);
    });
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error: ' + e.message);
  }
});

server.listen(4321, () => {
  console.log('Server running on http://localhost:4321 and http://127.0.0.1:4321');
});
