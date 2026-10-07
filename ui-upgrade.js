const fs = require('fs');
const path = require('path');

const walk = (dir, callback) => {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
};

walk('./frontend/src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Upgrade small shadows to elegant smooth shadows
    content = content.replace(/shadow-sm/g, 'shadow-[0_4px_20px_rgb(0,0,0,0.03)]');
    content = content.replace(/shadow-md/g, 'shadow-[0_8px_30px_rgb(0,0,0,0.06)]');
    
    // Upgrade button styling - general button improvements
    content = content.replace(/rounded-lg/g, 'rounded-xl');
    // For primary solid buttons, make sure they have a nice hover lift
    content = content.replace(/hover:shadow-md/g, 'hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300');
    
    // Improve specific hard borders
    content = content.replace(/border-slate-100/g, 'border-slate-100/60');
    content = content.replace(/border-slate-200/g, 'border-slate-200/60');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated UI in ${filePath}`);
    }
  }
});
