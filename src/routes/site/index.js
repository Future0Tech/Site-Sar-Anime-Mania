const { db } = require("../../FireBase");

const { Router } = require("express");
const router = Router();

//const collection = req.params.collection;
//const collection = req.body.collection;

// index page
router.get('/', function(req, res) {
  res.render('pages/index');
});

/*
router.get('/', async (req, res) => {
  try {
    const querySnapshot = await db.collection('Anime').get();
      const Snapshot = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    res.render('pages/index', {snapshot: Snapshot});
  } catch (error) {
    console.error(error);
  }
});

router.get("/delete-contact/:id", async (req, res) => {
  await db.collection("contacts").doc(req.params.id).delete();
  res.redirect("/");
});
*/

module.exports = router;