const Pets = require('../models/pets.model');


module.exports.CreateOne = (req, res) => {
    Pets.create(req.body)
        .then((onePet) => {
            res.json({ pets: onePet })
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        })
}

module.exports.findAll = (req, res) => {
    Pets.find()
        .then((allPets) => {
            res.json({ pets: allPets })
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        }
        )
}
module.exports.findOne = (req, res) => {
    Pets.findOne({ _id: req.params.id })
        .then((onePet) => {
            res.json({ pet: onePet })
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        })
}
module.exports.update = (req, res) => {
    Pirate.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then((updatepirate) => {
        res.json({pirates: updatepirate})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })

}

module.exports.update = (req, res) => {
    Pets.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then((updatepirate) => {
        res.json({pets: updatepirate})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })

}

module.exports.delete = (req, res) => {
    Pets.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

// module.exports.findFilteredPets = (req, res) => {
//     Pets.find({ CrewPosition: req.params.crew })
//         .then((onePets) => {
//             res.json({ pets: onePets })
//         })
//         .catch((err) => {
//             res.json({ message: "Something went wrong", error: err })
//         })
// }

