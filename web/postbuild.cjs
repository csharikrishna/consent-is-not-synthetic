const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

function aliasRscPayloads(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('__next.') && entry.name.endsWith('__PAGE__.txt') === false) {
        const pageTxt = path.join(fullPath, '__PAGE__.txt');
        if (fs.existsSync(pageTxt)) {
          const aliasFile = path.join(dir, `${entry.name}.__PAGE__.txt`);
          if (!fs.existsSync(aliasFile)) {
            fs.copyFileSync(pageTxt, aliasFile);
          }
        }
      }
      aliasRscPayloads(fullPath);
    }
  }
}

if (fs.existsSync(outDir)) {
  aliasRscPayloads(outDir);
  // Required for GitHub Pages so Jekyll does not strip _next/ assets
  fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
  console.log('Postbuild: Successfully aliased RSC payloads and wrote .nojekyll in out/.');
}
