'use strict';

let Profesor = require('../profesores/profesor.model');

module.exports = {
    index: (req,res) => {
        Profesor
            .find({})
            .exec((err,profesorDetails) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({message: err})
                }
                res.status(200).json({message: "Profesor Details fetched Successfully",data: profesorDetails});
            })
    },
    retrieve: (req,res) => {
        let profesorId = req.params.id;
        Profesor
            .findOne({_id: profesorId})
            .exec((err,profesorDetails) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({message: err})
                }
                res.status(200).json({message: "Profesor Detail fetched Successfully",data: profesorDetails});
            })
    },
    create: (req,res) => {
        Profesor.create(req.body,(err,profesorDetails) => {
            if (err) {
                console.error(err);
                res.status(500).json({message: err})
            }
            res.status(201).json({message: "Profesor Created Successfully",data: profesorDetails});
        })
    },
    update: (req,res) => {
        let profesorId = req.params.id;
        Profesor
            .findByIdAndUpdate(profesorId,{$set: req.body}).exec((err,profesorDetails) => {
            if (err) res.status(500).json({message: err})
            res.status(200).json({message: "Profesor updated"});
        })
    },
    delete: (req,res) => {
        let profesorId = req.params.id;
        Profesor
            .findByIdAndUpdate(profesorId,{$set: {is_active: false}}).exec((err,profesorDetails) => {
            if (err) res.status(500).json({message: err})
            res.status(200).json({message: "Vendor Deleted"});
        })
    }
}