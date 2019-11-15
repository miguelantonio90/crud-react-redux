'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EstudianteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    edad: {
        type: Number
    },
    sexo: {
        type: Boolean
    },
    fechaNacimiento: {
        type: Date
    },
    lugarNacimiento: {
        type: Schema.Types.ObjectId,
        ref: 'Ciudad'
    },
    grupo: {
        type: Schema.Types.ObjectId,
        ref: 'Grupo'
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
    collection: 'estudiante'
});

EstudianteSchema.pre('find',function () {
    this.where({is_active: {$ne: false}});
});

module.exports = mongoose.model('Estudiante',EstudianteSchema);