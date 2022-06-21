#! /usr/bin/env node

// include node fs module
var fs = require("fs");
var chalk = require("chalk");

const log = console.log;
log(chalk.bgGreen.bold("Start building frontend tools!"));

fs.writeFileSync("tailwind.config.js", "");
fs.appendFileSync(
  "tailwind.config.js",
  `module.exports = {
  content: ["*.{html,js}", "scripts/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
`,
  function (err) {
    if (err) throw err;
    log(chalk.bgCyan.bold("Added Tailwind config file!"));
  }
);

fs.writeFileSync("postcss.config.js", "");
fs.appendFileSync(
  "postcss.config.js",
  `module.exports = (ctx) => ({
  syntax: "postcss-scss",
  map: ctx.options.map,
  // parser: require("postcss-comment"),
  parser: "postcss-scss",
  plugins: {
      "tailwindcss/nesting": true,
      "tailwindcss": true,
      "postcss-import": true,
      "autoprefixer": true,
      "postcss-nested": true,
      // "cssnano": ctx.env === 'production' ? {
      //     preset: "default",
      // } : false,
      "postcss-minify": ctx.env === 'production',
  },
});
`,
  function (err) {
    if (err) throw err;
    log(chalk.bgMagenta.bold("Added POSTCSS config file!"));
  }
);

var dir = "./styles";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  log(chalk.bgMagenta.bold("Added styles directories!"));
}

fs.writeFileSync("./styles/styles.scss", "");
fs.appendFileSync(
  "./styles/styles.scss",
  `@tailwind base;
@tailwind components;
@tailwind utilities;
`,
  function (err) {
    if (err) throw err;
    log(chalk.bgMagenta.bold("Added POSTCSS config file!"));
  }
);
