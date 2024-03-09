const express = require("express");
const app = express();

const os = require("os");
const path = require("path");
// const member = require('./routes/member');
// const connectDB = require('./db/connectDB');
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
// app.use('/api/v1/member', member);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT;
// const ipAddress2 = "192.168.1.106"
// // Obtenez l'adresse IP de la première interface réseau non interne
// const networkInterfaces = os.networkInterfaces();
// // console.log(networkInterfaces);
// const ipAddress = Object.values(networkInterfaces)
//   .flat()
//   .filter((iface) => iface.family === "IPv4" && !iface.internal)[0].address;

// // console.log(ipAddress);

const Port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));

// app.listen(Port, ipAddress2, () => {
//   console.log(`Le serveur écoute sur ${ipAddress}:${Port}.....`);
// });
