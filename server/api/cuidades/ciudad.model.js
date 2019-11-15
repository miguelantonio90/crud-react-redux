'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CiudadSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
},{
    id: false,
    toObject: {
        virtuals: true,
        getters: true
    },
    toJSON: {
        virtuals: true,
        getters: true,
        setters: false
    },
    timestamps: true,
    collection: 'ciudad'
});

CiudadSchema.pre('find',function () {
    this.where({is_active: {$ne: false}});
});

module.exports = mongoose.model('Ciudad',CiudadSchema);