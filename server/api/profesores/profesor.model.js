'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProfesorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
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
    collection: 'profesor'
});

ProfesorSchema.pre('find',function () {
    this.where({is_active: {$ne: false}});
});

module.exports = mongoose.model('Profesor',ProfesorSchema);