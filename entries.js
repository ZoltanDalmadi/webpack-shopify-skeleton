const fs = require('fs');
const path = require('path');

const scriptsDir = path.resolve(__dirname, 'src', 'assets', 'scripts');
const layoutScriptsDir = path.resolve(scriptsDir, 'layout');
const sectionsScriptsDir = path.resolve(scriptsDir, 'sections');
const templatesScriptsDir = path.resolve(scriptsDir, 'templates');

const regex = /jsx?$/;

function transformName(filename, type) {
  const name = path.basename(filename, path.extname(filename));
  return `${name}.${type}`;
}

function readDir(dir, type) {
  return fs.readdirSync(dir)
    .filter(file => regex.test(file))
    .map(file => ({[transformName(file, type)]: path.resolve(dir, file) }))
    .reduce((a, c) => ({ ...a, ...c }), {});
}

function entries() {
  return {
    ...readDir(layoutScriptsDir, 'layout'),
    ...readDir(sectionsScriptsDir, 'section'),
    ...readDir(templatesScriptsDir, 'template')
  }
}

module.exports = entries();
