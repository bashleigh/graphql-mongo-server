const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const DIST = path.join(__dirname, 'dist');
const SRC = path.join(__dirname, 'src');

module.exports = {
    target: 'node',
    name: 'server',
    context: SRC,
    entry: {
        "./index.js": ['babel-polyfill', './index.js'],
    },
    output: {
        path:     DIST,
        filename: "index.js"
    },
    resolve: {
        extensions: ['.js']
    }
};