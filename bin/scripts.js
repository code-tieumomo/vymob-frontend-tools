#! /usr/bin/env node

// include node fs module
var fs = require("fs");

try {
  const data = fs.readFileSync("package.json", "utf8");
  const formatted = JSON.parse(data);
  formatted.scripts = {
    build: "postcss styles/styles.scss -o styles/styles.css --map",
    production:
      "postcss styles/styles.scss -o styles/styles.css --env production --map",
    watch: "postcss styles/styles.scss -o styles/styles.css --map --watch",
  };

  fs.writeFileSync(
    "package.json",
    JSON.stringify(formatted).split("\n").toString(),
    "utf8"
  );
} catch (err) {
  console.error(err);
}
