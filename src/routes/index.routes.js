const {Router} = require("express");
const router = Router();

const ModelUser = require("../userModel")

router.get("/", (req, res) => {
    res.send("Bienvenido a la API de Petlandia");
});


module.exports = router;

//Funcionalidades CRUD - CREAR
router.post("/", async(req, res) => {
    const body = req.body;

    const respuesta = await ModelUser.create(body);

    res.send(respuesta);
})

//Funcionalidades CRUD - READ
router.get("/ls", async(req, res) => {
    const respuesta = await ModelUser.find({});

    res.send(respuesta);
})

//Funcionalidades CRUD - READ ONLY ONE
router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id: id});

    res.send(respuesta);
})

//Funcionalidades CRUD - UPDATE
router.put("/:id", async(req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id: id}, body);
    res.send(respuesta);
})
