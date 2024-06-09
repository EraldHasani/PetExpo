const PetsController= require("../controllers/pets.controller");
const {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.get("/pets/:id", PetsController.findOne);
    app.get("/pets", PetsController.findAll);
    app.post("/pets/new", PetsController.CreateOne);
    app.put("/pets/update/:id", PetsController.update);
    app.delete("/pets/delete/:id", PetsController.delete);  
}