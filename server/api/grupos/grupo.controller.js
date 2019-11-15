'use strict';


let Grupo = require('../grupos/grupo.model');

module.exports = {
    index: (req,res) => {
        Grupo
            .find({})
            .populate("profesor")
            .exec((err,grupoDetails) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({message: err})
                }
                res.status(200).json({message: "Grupo Details fetched Successfully",data: grupoDetails});
            })
    },
    retrieve: (req,res) => {
        let grupoId = req.params.id;
        Grupo
            .findOne({_id: grupoId})
            .exec((err,grupoDetails) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({message: err})
                }
                res.status(200).json({message: "Grupo Detail fetched Successfully",data: grupoDetails});
            })
    },
    create: (req,res) => {
        Grupo.create(req.body,(err,grupoDetails) => {
            if (err) {
                console.error(err);
                res.status(500).json({message: err})
            }
            res.status(201).json({message: "Grupo Created Successfully",data: grupoDetails});
        })
    },
    update: (req,res) => {
        let grupoId = req.params.id;
        Grupo
            .findByIdAndUpdate(grupoId,{$set: req.body}).exec((err,grupoDetails) => {
            if (err) res.status(500).json({message: err})
            res.status(200).json({message: "Grupo updated"});
        })
    },
    delete: (req,res) => {
        let grupoId = req.params.id;
        Grupo
            .findByIdAndUpdate(grupoId,{$set: {is_active: false}}).exec((err,grupoDetails) => {
            if (err) res.status(500).json({message: err})
            res.status(200).json({message: "Grupo Deleted"});
        })
    }
}