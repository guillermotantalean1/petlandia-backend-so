const { Router } = require("express");
const router = Router();

const ModelUser = require("../models/userModel");
const ProductModel = require("../models/productModel");
const PetModel = require("../models/petModel");
const OrderModel = require("../models/orderModel");
const DonationModel = require("../models/donationModel");
const AssociationModel = require("../models/associationModel");

// Ruta de bienvenida
router.get("/", (req, res) => {
    res.send("Bienvenido a la API de Petlandia");
});


// ------------------ userS ------------------

// Crear user
router.post("/users", async (req, res) => {
    try {
        const nuevouser = await ModelUser.create(req.body);
        res.status(201).json(nuevouser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Listar todos los users
router.get("/users", async (req, res) => {
    try {
        const users = await ModelUser.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Obtener un user por ID
router.get("/users/:id", async (req, res) => {
    try {
        const user = await ModelUser.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "user no encontrado" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar un user
router.put("/users/:id", async (req, res) => {
    try {
        const user = await ModelUser.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ error: "user no encontrado" });
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Eliminar un user (opcional)
router.delete("/users/:id", async (req, res) => {
    try {
        const user = await ModelUser.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ error: "user no encontrado" });
        res.json({ mensaje: "user eliminado correctamente" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// ------------------ PRODUCTOS ------------------

// Crear producto
router.post("/productos", async (req, res) => {
    try {
        const producto = await ProductModel.create(req.body);
        res.status(201).json(producto);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Listar todos los productos
router.get("/productos", async (req, res) => {
    try {
        const productos = await ProductModel.find({});
        res.json(productos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Obtener producto por ID
router.get("/productos/:id", async (req, res) => {
    try {
        const producto = await ProductModel.findById(req.params.id);
        if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
        res.json(producto);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar producto
router.put("/productos/:id", async (req, res) => {
    try {
        const producto = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
        res.json(producto);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Eliminar producto
router.delete("/productos/:id", async (req, res) => {
    try {
        const producto = await ProductModel.findByIdAndDelete(req.params.id);
        if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
        res.json({ mensaje: "Producto eliminado correctamente" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ------------------ MASCOTAS ------------------

// Crear mascota
router.post("/mascotas", async (req, res) => {
    try {
        const mascota = await PetModel.create(req.body);
        res.status(201).json(mascota);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Listar mascotas
router.get("/mascotas", async (req, res) => {
    const mascotas = await PetModel.find({});
    res.json(mascotas);
});

// Obtener mascota por ID
router.get("/mascotas/:id", async (req, res) => {
    const mascota = await PetModel.findById(req.params.id);
    if (!mascota) return res.status(404).json({ error: "Mascota no encontrada" });
    res.json(mascota);
});

// Actualizar mascota
router.put("/mascotas/:id", async (req, res) => {
    const mascota = await PetModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(mascota);
});

// Eliminar mascota
router.delete("/mascotas/:id", async (req, res) => {
    const mascota = await PetModel.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Mascota eliminada correctamente" });
});

router.post("/ordenes", async (req, res) => {
    try {
        const orden = await OrderModel.create(req.body);
        res.status(201).json(orden);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ------------------ ÓRDENES ------------------


// Listar órdenes
router.get("/ordenes", async (req, res) => {
    const ordenes = await OrderModel.find({}).populate("user_id products.product_id");
    res.json(ordenes);
});

// Obtener orden por ID
router.get("/ordenes/:id", async (req, res) => {
    const orden = await OrderModel.findById(req.params.id).populate("user_id products.product_id");
    if (!orden) return res.status(404).json({ error: "Orden no encontrada" });
    res.json(orden);
});

// Actualizar orden
router.put("/ordenes/:id", async (req, res) => {
    const orden = await OrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(orden);
});

// Eliminar orden
router.delete("/ordenes/:id", async (req, res) => {
    const orden = await OrderModel.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Orden eliminada correctamente" });
});

// ------------------ DONACIONES ------------------
// Crear donación
router.post("/donaciones", async (req, res) => {
    try {
        const donacion = await DonationModel.create(req.body);
        res.status(201).json(donacion);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Listar donaciones
router.get("/donaciones", async (req, res) => {
    const donaciones = await DonationModel.find({}).populate("user_id association_id order_id");
    res.json(donaciones);
});

// Obtener donación por ID
router.get("/donaciones/:id", async (req, res) => {
    const donacion = await DonationModel.findById(req.params.id).populate("user_id association_id order_id");
    if (!donacion) return res.status(404).json({ error: "Donación no encontrada" });
    res.json(donacion);
});

// Actualizar donación
router.put("/donaciones/:id", async (req, res) => {
    const donacion = await DonationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(donacion);
});

// Eliminar donación
router.delete("/donaciones/:id", async (req, res) => {
    const donacion = await DonationModel.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Donación eliminada correctamente" });
});

// ------------------ ASOCIACIONES ------------------
// Crear asociación
router.post("/asociaciones", async (req, res) => {
    try {
        const asociacion = await AssociationModel.create(req.body);
        res.status(201).json(asociacion);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Listar asociaciones
router.get("/asociaciones", async (req, res) => {
    const asociaciones = await AssociationModel.find({});
    res.json(asociaciones);
});

// Obtener por ID
router.get("/asociaciones/:id", async (req, res) => {
    const asociacion = await AssociationModel.findById(req.params.id);
    if (!asociacion) return res.status(404).json({ error: "Asociación no encontrada" });
    res.json(asociacion);
});

// Actualizar
router.put("/asociaciones/:id", async (req, res) => {
    const asociacion = await AssociationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(asociacion);
});

// Eliminar
router.delete("/asociaciones/:id", async (req, res) => {
    const asociacion = await AssociationModel.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Asociación eliminada correctamente" });
});


module.exports = router;