const express = require("express");
const { insertReading, showReading, updateReading, deleteReading } = require("../controller/reading.controller");

const ReadinRouter = express.Router();

//all routes will be appear here
ReadinRouter.post("/insert",insertReading)
ReadinRouter.get("/showreading",showReading)
ReadinRouter.patch("/updatereading/:readingId",updateReading)
ReadinRouter.delete("/deletereading/:readingId",deleteReading)

module.exports = {
    ReadinRouter,
}