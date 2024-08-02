// const { exec } = require("child_process");

// exec(
//   "sass ./public/scss/index.scss ./public/css/index.css",
//   (err, stdout, stderr) => {
//     if (err) {
//       console.error(`Error: ${stderr}`);
//       return;
//     }
//     console.log(stdout);
//   }
// );
const { exec } = require("child_process");

const files = [
  {
    input: "./public/scss/client/index.scss",
    output: "./public/css/index.css",
  },
  {
    input: "./public/scss/admin/index.admin.scss",
    output: "./public/css/index.admin.css",
  },
   {
     input: "./public/scss/client/login.scss",
     output: "./public/css/login.css",
   },
];

const compileSass = (input, output) => {
  return new Promise((resolve, reject) => {
    exec(`sass ${input} ${output}`, (err, stdout, stderr) => {
      if (err) {
        reject(stderr);
        return;
      }
      resolve(stdout);
    });
  });
};

Promise.all(files.map((file) => compileSass(file.input, file.output)))
  .then((results) => {
    results.forEach((output) => console.log(output));
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
