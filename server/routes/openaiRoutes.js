const express = require("express");
const { summaryController, paragraphController, chatbotController } = require("../controllers/openaiController");


const router = express.Router();

//route
router.post("/summy", summaryController);
router.post("/paragraph", paragraphController);
router.post("/luna", chatbotController);
// router.post("/js-converter", jsconverterController);
// router.post("/scifi-image", scifiImageController);

module.exports = router;