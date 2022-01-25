const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  switch (req.url) {
    case "/":
      fs.readFile("index.html", (err, data) => {
        if (!err) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
      break;
    case "/project":
      fs.readFile("projects.html", (err, data) => {
        if (!err) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
      break;
    case "/company":
      fs.readFile("company.html", (err, data) => {
        if (!err) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
      break;
    case "/interest":
      fs.readFile("interest.html", (err, data) => {
        if (!err) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
      break;
    case "/project/Martial_Arts_Simulator":
      fs.readFile("./html-css/index.html", (err, data) => {
        if (!err) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
      break;
    default:
      res.statusCode = 404;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Error 404 file not found</h1>");
      res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function validate() {
  var name = document.f1.name.value;
  var passwordlength = document.f1.password.value.length;
  var status = false;
  if (name == "") {
    document.getElementById("namelocation").innerHTML =
      '<p class="red">Please enter your name</p>';
    status = false;
  } else {
    status = true;
  }

  if (passwordlength <= 8) {
    window.alert("password must me more than 8 characters");
    status = false;
  }
  return status;
}
