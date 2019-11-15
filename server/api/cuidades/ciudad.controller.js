'use strict';

let Ciudad = require('../cuidades/ciudad.model');

module.exports = {
    index: (req,res) => {
        Ciudad
            .find({})
            .exec((err,ciudadDetails) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({message: err})
                }
                res.status(200).json({message: "Ciudad Details fetched Successfully",data: ciudadDetails});
            })
    },
    retrieve: (req,res) => {
        const ciudadId = req.params.id;
        Ciudad
            .findOne({_id: ciudadId})
            .exec((err,ciudadDetails) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({message: err})
                }
                res.status(200).json({message: "Ciudad Detail fetched Successfully",data: ciudadDetails});
            })
    },
    create: (req,res) => {
        Ciudad.create(req.body,(err,ciudadDetails) => {
            if (err) {
                console.error(err);
                res.status(500).json({message: err})
            }
            res.status(201).json({message: "Ciudad Created Successfully",data: ciudadDetails});
        })
    },
    update: (req,res) => {
        const ciudadId = req.params.id;
        Ciudad
            .findByIdAndUpdate(ciudadId,{$set: req.body}).exec((err,ciudadDetails) => {
            if (err) res.status(500).json({message: err})
            res.status(200).json({message: "Ciudad updated"});
        })
    },
    delete: (req,res) => {
        const ciudadId = req.params.id;
        Ciudad
            .findByIdAndUpdate(ciudadId,{$set: {is_active: false}}).exec((err,ciudadDetails) => {
            if (err) res.status(500).json({message: err})
            res.status(200).json({message: "Vendor Deleted"});
        })
    }
}