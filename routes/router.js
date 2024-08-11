const { Router } = require("express");
const router = Router();
const controller = require("../controllers/controller");

router.get('/', controller.messagesGet);

router.post('/new', controller.messageAdd);

router.get('/message/:index', controller.messageOpen);

router.get('/delete', controller.messagesDelete);

module.exports = router;