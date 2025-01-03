const express = require("express");
const simpleGit = require('simple-git');
const pm2 = require("pm2");
const path = require("path");

module.exports = function startDevToolsServer() {
  // app
  const app = express();

  // home page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../private/dev.html"));
  });

  // api
  const git = simpleGit();
  app.get("/api/switch-branch/:branch", (req, res) => {
    const branch = req.params.branch;
    console.log(branch);
    git.checkout(branch, (err) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to switch branch"
        });
      }
      res.status(200).json({
        message: `Switched to branch: ${branch}`
      })
    });
  });

  app.get("/api/get-branch", (req, res) => {
    git.branch((err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to fetch branches"
        });
      }
      
      res.status(200).json({
        message: "Branches fetched successfully",
        data: result.all.filter(branch => !branch.startsWith('remotes/'))
      })
    });
  });

  // start the app to listen 
  app.listen(process.env.DEV_SERVER_PORT, () => {
    console.log(`Development Tools Server running on port ${process.env.DEV_SERVER_PORT}`);
  });
}