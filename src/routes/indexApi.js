const { Router } = require("express");
const router = Router();

let indexApiControlle = require('../controllers/indexApiController')

router.get("/", indexApiControlle.Doc);
router.get("/:collection", indexApiControlle.getAll);
router.get("/:collection/:id", indexApiControlle.getId);
router.get("/Update/:collection/:id", indexApiControlle.Update);

module.exports = router;