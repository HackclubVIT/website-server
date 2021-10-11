"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ContactUs_Controller_1 = require("../controllers/ContactUs.Controller");
const router = (0, express_1.Router)();
router.post("/contactUs", ContactUs_Controller_1.contactUsController);
exports.default = router;
