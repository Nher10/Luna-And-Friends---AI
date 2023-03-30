const express = require("express");
const {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
} = require("../controllers/openaiController");

const router = express.Router();

//route
router.post("/summy", summaryController);
router.post("/prolix", paragraphController);
router.post("/luna", chatbotController);
router.post("/jaycee", jsconverterController);
router.post("/ada", scifiImageController);

module.exports = router;
