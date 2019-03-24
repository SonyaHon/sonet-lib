const config = require('./webpack.config.dev');
const webpack = require('webpack');
const MemoryFs = require('memory-fs');

module.exports = async (entry, defines) => {
    const cfg = config(entry, defines);
    const fs = new MemoryFs();
    const compiler = webpack(cfg);
    compiler.outputFileSystem = fs;
    const pr = new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                reject(err);
                return;
            }
            const content = fs.readFileSync(`/bundle.js`);
            console.log(fs.readdirSync('/'));
            resolve(content);
        });
    });
    return pr;
};
