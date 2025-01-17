const express = require("express");
const { createClient, getAllClients } = require("../controller/client.controller");

const clientRouter = express.Router();

clientRouter.post('/createclient', createClient);
clientRouter.get('/getclient',getAllClients);

module.exports = {
    clientRouter
}