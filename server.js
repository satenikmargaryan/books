const express = require("express");
const http = require("http");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const post = require("./routes/post.routes");

const app = express();

const port = process.env.port || 3001;

let dev_db_url = "";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/dist/books"));

app.use("/api/posts", post);

app.post("/api/sendmail", (req, res) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "satenikmargaryanm@gmail.com", // generated ethereal user
      pass: "****", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter.sendMail({
    from: "satenikmargaryanm@gmail.com", // sender address
    to: "satenik@mailinator.com, satenikmargaryanm@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
  });
});

app.get("*", (req, res) => {
  res.sendFile("/dist/books/index.html", { root: __dirname });
});

const server = http.createServer(app);

server.listen(port, () => console.log("Running..."));
