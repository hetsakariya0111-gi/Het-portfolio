const fs = require('fs');
const path = require('path');

const certs = [
  {
    fileName: 'c1_web.svg',
    course: 'Advanced Web Developer Bootcamp',
    date: '2025',
    color1: '#bd9a3d', // Gold
    color2: '#2c3e50', // Navy
    org: 'Udemy Certified'
  },
  {
    fileName: 'c2_meta.svg',
    course: 'Meta Front-End Developer',
    date: '2025',
    color1: '#0064e0', // Meta Blue
    color2: '#111111', // Black
    org: 'Coursera / Meta'
  },
  {
    fileName: 'c3_aws.svg',
    course: 'AWS Cloud Practitioner',
    date: '2026',
    color1: '#ff9900', // AWS Orange
    color2: '#232f3e', // AWS Dark
    org: 'Amazon Web Services'
  },
  {
    fileName: 'c4_node.svg',
    course: 'React & Node.js Excellence',
    date: '2026',
    color1: '#61dafb', // React Cyan
    color2: '#026e00', // Node Green
    org: 'Coursera Excellence'
  }
];

const generateSVG = (cert) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1056 816">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1056" height="816" fill="#fcfcfc" />
  
  <!-- Outer Border -->
  <rect x="30" y="30" width="996" height="756" fill="none" stroke="${cert.color1}" stroke-width="12" rx="10" />
  <!-- Inner Border Background -->
  <rect x="42" y="42" width="972" height="732" fill="#ffffff" stroke="${cert.color2}" stroke-width="3" rx="6" />

  <!-- Corner Boxes -->
  <rect x="30" y="30" width="40" height="40" fill="${cert.color2}" />
  <rect x="986" y="30" width="40" height="40" fill="${cert.color2}" />
  <rect x="30" y="746" width="40" height="40" fill="${cert.color2}" />
  <rect x="986" y="746" width="40" height="40" fill="${cert.color2}" />

  <!-- Logo/Header Area -->
  <text x="528" y="160" font-family="'Times New Roman', serif" font-size="52" font-weight="900" fill="${cert.color2}" text-anchor="middle" letter-spacing="4" filter="url(#shadow)">CERTIFICATE OF EXCELLENCE</text>
  
  <!-- Sub Header line -->
  <line x1="250" y1="200" x2="806" y2="200" stroke="${cert.color1}" stroke-width="2" />
  
  <text x="528" y="280" font-family="Arial, sans-serif" font-size="22" fill="#555" text-anchor="middle" letter-spacing="2">THIS IS PROUDLY PRESENTED TO</text>
  
  <!-- Name -->
  <text x="528" y="420" font-family="'Georgia', serif" font-size="85" font-style="italic" font-weight="bold" fill="${cert.color2}" text-anchor="middle">HET SAKARIYA</text>
  
  <text x="528" y="520" font-family="Arial, sans-serif" font-size="20" fill="#555" text-anchor="middle">for outstanding performance and successful completion of</text>
  
  <!-- Course Name -->
  <text x="528" y="600" font-family="'Times New Roman', serif" font-size="42" font-weight="bold" fill="${cert.color1}" text-anchor="middle">${cert.course}</text>
  
  <!-- Signatures -->
  <text x="250" y="690" font-family="'Georgia', serif" font-size="28" fill="#111" text-anchor="middle">${cert.org}</text>
  <line x1="150" y1="710" x2="350" y2="710" stroke="#222" stroke-width="1" />
  <text x="250" y="740" font-family="Arial, sans-serif" font-size="16" fill="#777" text-anchor="middle">Authorized Organization</text>

  <text x="806" y="690" font-family="'Georgia', serif" font-size="28" fill="#111" text-anchor="middle">${cert.date}</text>
  <line x1="706" y1="710" x2="906" y2="710" stroke="#222" stroke-width="1" />
  <text x="806" y="740" font-family="Arial, sans-serif" font-size="16" fill="#777" text-anchor="middle">Date Issued</text>

  <!-- Seal -->
  <circle cx="528" cy="710" r="50" fill="${cert.color1}" filter="url(#shadow)" />
  <circle cx="528" cy="710" r="40" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="4,4" />
  <text x="528" y="716" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">CERTIFIED</text>
</svg>`;
};

certs.forEach(c => {
  const filePth = path.join(__dirname, 'src', 'assets', c.fileName);
  fs.writeFileSync(filePth, generateSVG(c));
  console.log('Created: ', filePth);
});
