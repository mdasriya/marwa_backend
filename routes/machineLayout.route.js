const express = require("express");
const { createMachineLayout, showMachineLayout, updateMachineLayout, deleteMachineLayout } = require("../controller/machineLayout.controler");

const MachineLayoutRouter = express.Router();

MachineLayoutRouter.post("/create",createMachineLayout);
MachineLayoutRouter.get("/showmachine",showMachineLayout);
MachineLayoutRouter.patch("/update/:machineId",updateMachineLayout);
MachineLayoutRouter.delete("/delete/:machineId",deleteMachineLayout);

module.exports = {
    MachineLayoutRouter
}