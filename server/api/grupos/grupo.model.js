'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GrupoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    profesor: {
        type: Schema.Types.ObjectId,
        ref: 'Profesor'
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
    collection: 'grupo'
});

GrupoSchema.pre('find',function () {
    this.where({is_active: {$ne: false}});
});

module.exports = mongoose.model('Grupo',GrupoSchema);