const fs = require('fs');
const https = require('https');
const path = require('path');

const publicDir = path.join(__dirname, 'client', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const targetPath = path.join(publicDir, 'hero-video.mp4');

// High Definition 3D Animated Hypercar Video Stream
const videoUrl = 'https://cdn.pixabay.com/video/2021/04/13/70960-536488349_large.mp4';

console.log('Downloading 3D Car Animation Video to', targetPath);

const file = fs.createWriteStream(targetPath);
https.get(videoUrl, (response) => {
  if (response.statusCode === 301 || response.statusCode === 302) {
    https.get(response.headers.location, (redirectResponse) => {
      redirectResponse.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('3D Car Animation Download completed successfully!');
      });
    });
  } else {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('3D Car Animation Download completed successfully!');
    });
  }
}).on('error', (err) => {
  fs.unlink(targetPath, () => {});
  console.error('Download error:', err.message);
});
