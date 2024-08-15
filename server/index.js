import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import services from "../client/src/data/service.js";

/*******************{ initialize important variables }*************************/
const app = express();
const port = 3000;
const directoryPath = dirname(fileURLToPath(import.meta.url));
dotenv.config();

/*******************{ initialize mailing services }****************************/
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.error("Error with email verification\n", err.stack);
  } else {
    console.log("Successful email verification");
  }
});

/*************************{ initialize middleware }****************************/
app.use(express.static(join(directoryPath, "../client/dist")));
app.use(bodyParser.urlencoded({ extended: true }));

/**********************{ initialize route-handlers }***************************/
function serveReact(req, res) {
  res.sendFile(join(directoryPath, "../client/dist/index.html"));
}

app.get("/", serveReact);

app.get("/service", serveReact);

app.get("/reservation", serveReact);

app.get("/about", serveReact);

app.post("/submit", (req, res) => {
  // extract form elements
  const {
    fname,
    lname,
    combo,
    ["reservation-date"]: date,
    ["reservation-date-optional"]: dateOptional,
    phone,
    email,
  } = req.body;

  // helper function to format dates as necessary
  function formatDate(date) {
    let hour = date.getHours();
    let period;
    if (hour < 12) {
      period = "AM";
    } else {
      period = "PM";
      hour = hour - 12;
    }
    hour = hour || 12;
    return [
      hour,
      ":",
      date.getMinutes(),
      period,
      " on ",
      date.getMonth() + 1,
      "/",
      date.getDate(),
      "/",
      date.getFullYear(),
    ].join("");
  }

  // helper function to format combos as necessary
  function formatCombo(combo) {
    let formatted;
    switch (combo) {
      case "no-idea":
        formatted = "a treatment";
        break;
      case "combo1":
        formatted = `a ${services[0].name}`;
        break;
      case "combo2":
        formatted = `a ${services[1].name}`;
        break;
      case "combo3":
        formatted = `a ${services[2].name}`;
        break;
      case "combo4":
        formatted = `a ${services[3].name}`;
        break;
      case "multiple":
        formatted = `multiple treatments`;
        break;
      default:
        console.log(combo);
    }
    return formatted;
  }

  // create message
  const message = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Reservation Request",
    text: `${fname} ${lname} would like to receive ${formatCombo(
      combo
    )} at ${formatDate(new Date(date))}. ${
      dateOptional &&
      `Alternatively, ${fname} can receive his/her treatment at ${formatDate(
        new Date(dateOptional)
      )}. `
    }${fname}'s phone number is ${phone}. ${fname}'s email is ${email}.`,
  };

  // send email
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error("Error sending email\n", err.stack);
      res.status(500).send("Error sending request on server-side");
    } else {
      console.log("Email sent successfully");
      res.redirect("/");
    }
  });
});

app.get("/contact", serveReact);

/***************************{ initialize server }******************************/
app.listen(port, () => {
  console.log(`Listening in on port ${port}`);
});
