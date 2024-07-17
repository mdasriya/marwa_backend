const express = require("express");
const { createHandloan, getAllHandloans, getHandloanById, updateHandloan, deleteHandloan } = require("../controller/handleLone.controller");

const handleLoneRouter = express.Router();

handleLoneRouter.post('/handloans', createHandloan);
handleLoneRouter.get('/getallhandloans',getAllHandloans );
handleLoneRouter.patch('/gethandloansbyid/:id', getHandloanById);
handleLoneRouter.patch('/updatehandloans/:id', updateHandloan);
handleLoneRouter.patch('/deletehandloans/:id', deleteHandloan);


module.exports = {
    handleLoneRouter
}