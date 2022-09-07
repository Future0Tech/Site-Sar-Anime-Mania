const { db } = require("../FireBase");

const { Router } = require("express");
const router = Router();

//const collection = req.params.collection;
//const collection = req.body.collection;

/*/ index page

app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});
*/

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

router.get('/index2', async (req, res) => {
  const querySnapshot = await db.collection('Anime').get();
      const Snapshot = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    res.render('pages/index2', {snapshot: Snapshot});
});

router.get("/ind", async (req, res) => {
  try {
    const querySnapshot = await db.collection("contacts").get();
    const contacts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.render("index", { contacts });
  } catch (error) {
    console.error(error);
  }
});

router.post("/new-contact", async (req, res) => {
  const { firstname, lastname, email, phone } = req.body;
  await db.collection("contacts").add({
    firstname,
    lastname,
    email,
    phone,
  });
  res.redirect("/");
});

router.get("/delete-contact/:id", async (req, res) => {
  await db.collection("contacts").doc(req.params.id).delete();
  res.redirect("/");
});

router.get("/edit-contact/:id", async (req, res) => {
  const doc = await db.collection("contacts").doc(req.params.id).get();
  res.render("index", { contact: { id: doc.id, ...doc.data() } });
});

router.post("/update-contact/:id", async (req, res) => {
  const { firstname, lastname, email, phone } = req.body;
  const { id } = req.params;
  await db
    .collection("contacts")
    .doc(id)
    .update({ firstname, lastname, email, phone });
  res.redirect("/");
});

module.exports = router;
