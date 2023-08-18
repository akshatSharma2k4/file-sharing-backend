const express = require("express");
const router = express.Router();
const upload = require("../middlewares/middlewares.js");

const { uploadController } = require("../controllers/controller.js");
const { downloadController } = require("../controllers/controller.js");
// middleware m freontend m jo naame se pass kiya tha wo hi dena h jaise maine file k naam se pass kiya tha toh file dena h
router.post("/upload", upload.single("file"), uploadController);
router.get("/:id", downloadController);

module.exports = router;
