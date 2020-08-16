const experss = require("express");

const VueServerRender = require("vue-server-renderer");

const fs = require("fs");

const app = experss();

const router = experss.Router();

// const Vue = require("vue")
// const vm = new Vue({
//   data() {
//     return {
//       msg: "hello",
//     };
//   },
//   template: "<div>{{msg}}</div>",
// });

// const template = fs.readFileSync("./template.html", "utf-8");

// const render = VueServerRender.createRenderer({
//   template,
// });

// const ServerBundle = fs.readFileSync("./dist/server.bundle.js", "utf-8");

// const template = fs.readFileSync("./dist/index.ssr.html", "utf-8");

// const render = VueServerRender.createBundleRenderer(ServerBundle, {
//   template,
// });

const ServerBundle = require("./dist/vue-ssr-server-bundle.json");

const clientManifest = require("./dist/vue-ssr-client-manifest.json");

const template = fs.readFileSync("./dist/index.ssr.html", "utf-8");

const render = VueServerRender.createBundleRenderer(ServerBundle, {
  template,
  clientManifest,
});

router.get("/", async (req, res) => {
  const str = await new Promise((resolve, reject) => {
    render.renderToString({ url: "/" }, (err, data) => {
      if (err) {
        reject(err);
        console.log(err);
        return;
      }
      resolve(data);
    });
  });
  res.end(str);
});

app.use(router);

app.use(experss.static("./dist"));

app.use(async (req, res) => {
  try {
    const str = await new Promise((resolve, reject) => {
      render.renderToString({ url: req.url }, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
    res.end(str);
  } catch (error) {
    res.end("404");
  }
});

app.listen(3000, function() {
  console.log("localhost:3000");
});
