const { db } = require("../FireBase");

exports.Doc = async (req, res) => {
  try {
    const doc = await db.collection('Coleção').doc('roots').get();
    res.status(200).json({
      mensage:'selecione uma dessas coleção',
      urlExemplo:'https://nodejs-firebase.sardinhacn.repl.co/api/Coleção',
      id: doc.id,
      ...doc.data()
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

exports.getAll = async (req, res, next) => {
  try {
    const querySnapshot = await db.collection(req.params.collection);
    const data = await querySnapshot.get();
    if(data.empty) {
      res.status(404).json({mensage:`Não foi encontrado nada na coleção: ${Collection}`});
    } else {
      const querySnapshot = await db.collection(req.params.collection).get();
      const Snapshot = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).json(Snapshot);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

exports.getId = async (req, res) => {
  try {
    const doc = await db.collection(req.params.collection).doc(req.params.id).get();
    res.status(200).json({id: doc.id, ...doc.data()});
  } catch (error) {
    res.status(400).send(error.message);
  }
}

exports.Update = async (req, res, next) => {
  try {
    const querySnapshot =  await db.collection(req.params.collection).doc(req.params.id);
    await querySnapshot.update(req.body);
    res.status(200).send({mensage: 'Student record updated successfuly'});        
  } catch (error) {
    res.status(400).send(error.message);
  }
}

exports.Delete = async (req, res, next) => {
  try {
    await db.collection(req.params.collection).doc(req.params.id).delete();
    res.status(200).send({mensage: 'Registro excluído com sucesso'});
  } catch (error) {
    res.status(400).send(error.message);
  }
}
