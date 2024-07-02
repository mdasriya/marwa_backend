const express = require("express");
const { createMachine, showMachine, updateMachine, deleteMachine } = require("../controller/machine.controler");

const MachineRouter = express.Router();

MachineRouter.post("/create",createMachine);
MachineRouter.get("/showmachine",showMachine);
MachineRouter.patch("/update/:machineId",updateMachine);
MachineRouter.delete("/delete/:machineId",deleteMachine);

module.exports = {
    MachineRouter
}