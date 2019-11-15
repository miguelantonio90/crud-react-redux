'use strict';

let Estudiante = require('../estudiantes/estudiante.model');

module.exports = {
    index: (req,res) => {
        Estudiante
            .find({})
            .populate('lugarNacimiento grupo')
            .exec((err,estudianteDetails) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({message: err})
                }
                res.status(200).json({message: "Estudiante Details fetched Successfully",data: estudianteDetails});
            })
    },
    retrieve: (req,res) => {
        const estudianteId = req.params.id;
        Estudiante
            .findOne({_id: estudianteId})
            .exec((err,estudianteDetails) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({message: err})
                }
                res.status(200).json({message: "Estudiante Detail fetched Successfully",data: estudianteDetails});
            })
    },
    create: (req,res) => {
        Estudiante.create(req.body,(err,estudianteDetails) => {
            if (err) {
                console.error(err);
                res.status(500).json({message: err})
            }
            res.status(201).json({message: "Estudiante Created Successfully",data: estudianteDetails});
        })
    },
    update: (req,res) => {
        const estudianteId = req.params.id;
        Estudiante
            .findByIdAndUpdate(estudianteId,{$set: req.body}).exec((err,estudianteDetails) => {
            if (err) res.status(500).json({message: err})
            res.status(200).json({message: "Estudiante updated"});
        })
    },
    delete: (req,res) => {
        const estudianteId = req.params.id;
        Estudiante
            .findByIdAndUpdate(estudianteId,{$set: {is_active: false}}).exec((err,estudianteDetails) => {
            if (err) res.status(500).json({message: err})
            res.status(200).json({message: "Estudiante Deleted"});
        })
    }
}