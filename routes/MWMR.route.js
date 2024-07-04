const express = require("express");
const { MWMRinsert, showMWMR, updateMWMR, deleteMWMR } = require("../controller/MWMR.controller");

const MWMRRouter = express.Router();

//all routes will be appear here
MWMRRouter.post("/insertmwmr",MWMRinsert)
MWMRRouter.get("/showrmwmr",showMWMR)
MWMRRouter.patch("/updatemwmr/:MWMRid",updateMWMR)
MWMRRouter.delete("/deletemwmr/:MWMRid",deleteMWMR)

module.exports = {
    MWMRRouter,
}