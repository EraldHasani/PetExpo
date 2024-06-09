const mongoose= require("mongoose");

const PetsSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Name must be at least 3 characters long"]
    },
    type: {
        type: String,
        enum: ['Cat', 'Dog', 'Bird'],
    },
    description: {
        type: String,
        minlength: [3, "Description must be at least 3 characters long"]
    },
    origin: {
        type: String,
    },
    temperament: {
        type: String,
    },
    colors: {
        type: String,
    },  
    breed_group: {
        type: String,
    },
    size: {
        type: String,
    },
    lifespan: {
        type: String,
    },
    species: {
        type: String,
    },
    family: {
        type: String,
    },
    habitat: {
        type: String,
    },
    place_of_found: {
        type: String,
    },
    diet: {
        type: String,
    },
    weight_kg: {
        type: Number,
    },
    height_cm: {
        type: Number,
    },
    image: {
        type: String,
    },
    color: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    

}, { timestamps: true });

module.exports = mongoose.model("Pets", PetsSchema);