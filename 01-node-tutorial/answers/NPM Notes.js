// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo install -g <packagename> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// node_modules is where all dependencies are stored

const _ = require('lodash') // how you call external packages in Node after installing them
