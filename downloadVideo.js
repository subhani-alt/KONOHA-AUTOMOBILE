const fs = require('fs');
const https = require('https');
const path = require('path');

const publicDir = path.join(__dirname, 'client', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const targetPath = path.join(publicDir, 'hero-video.mp4');
const file = fs.createWriteStream(targetPath);

console.log('Downloading video to', targetPath);

https.get('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download completed successfully!');
  });
}).on('error', (err) => {
  fs.unlink(targetPath, () => {});
  console.error('Download error:', err.message);
});
