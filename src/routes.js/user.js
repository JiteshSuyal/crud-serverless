const router = require("express").Router();
const userHandlers = require("../handlers/user");

router.post("/create", userHandlers.create);

router.put("/update", userHandlers.update);

router.delete("/del", userHandlers.del);

router.get("/read", userHandlers.read);

module.exports = router;
