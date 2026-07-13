const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('Building web workspace...');
  execSync('npm run build --workspace=web', { stdio: 'inherit' });

  const rootDist = path.join(__dirname, 'dist');
  const webDist = path.join(__dirname, 'web', 'dist');

  console.log('Cleaning root dist directory...');
  fs.rmSync(rootDist, { recursive: true, force: true });

  console.log('Copying build output to root dist...');
  fs.cpSync(webDist, rootDist, { recursive: true });

  console.log('Build successful!');
} catch (error) {
  console.error('Build process failed:', error);
  process.exit(1);
}
