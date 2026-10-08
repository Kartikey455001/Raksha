import fs from 'node:fs';

fs.cpSync('web/dist', 'dist', { recursive: true });
console.log('✓ Successfully copied web/dist to root dist/');
