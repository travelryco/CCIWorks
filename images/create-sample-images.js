// This script creates sample SVG images that can be used as placeholders
// Run this to create sample images that will display immediately

const fs = require('fs');

const createSampleSVG = (width, height, backgroundColor, text, textColor = 'white') => {
    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${backgroundColor}"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
              fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
    </svg>`;
};

// Create sample images
const images = [
    { name: 'exhaust-work.jpg', bg: '#2c3e50', text: 'EXHAUST WORK' },
    { name: 'desert-truck.jpg', bg: '#f39c12', text: 'DESERT TRUCK' },
    { name: 'suspension-work.jpg', bg: '#3498db', text: 'SUSPENSION' },
    { name: 'land-cruiser.jpg', bg: '#27ae60', text: 'LAND CRUISER' },
    { name: 'green-monster.jpg', bg: '#8e44ad', text: 'GREEN MONSTER' }
];

images.forEach(img => {
    const svg = createSampleSVG(800, 600, img.bg, img.text);
    fs.writeFileSync(img.name.replace('.jpg', '.svg'), svg);
    console.log(`Created ${img.name.replace('.jpg', '.svg')}`);
});

console.log('\nSample images created! Upload these to your images/ folder or replace with your actual photos.');
console.log('The website will automatically detect and use real images when available.'); 