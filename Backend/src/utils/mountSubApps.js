const readDirectory = require("./readDirectory.js");
const path = require("path");
const modulesRoutePrefix = require("../config/modulesRoutePrefix.js");

module.exports = function mountSubApps(app) {
  if (app) {
    const modules = readDirectory(path.join(__dirname, "../modules"));
    for (const module of modules) {
      const modulesContent = readDirectory(path.join(__dirname, `../modules/${module}`));
      if (modulesContent.includes("app.js")) {
        const subApp = require(path.join(__dirname, `../modules/${module}/app.js`));
        app.use(modulesRoutePrefix[module], subApp);
      }
    }
  }
}