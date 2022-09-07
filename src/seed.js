const db = require("./FireBase");

setAnime('', '', []);

function setAnime(collection, doc, data) {
  const Anime = db.collection(collection),
  Ref = Anime.doc(doc);
  for (let i = 0; i < data.length; i++) {
    Ref.set(data[i]);
  }
}