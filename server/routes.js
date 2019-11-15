/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {
    app.use('/api/v1/auths', require('./api/auths'));
    app.use('/api/v1/vendors', require('./api/vendors'));
    app.use('/api/v1/ciudades',require('./api/cuidades'));
    app.use('/api/v1/profesores',require('./api/profesores'));
    app.use('/api/v1/grupos',require('./api/grupos'));
    app.use('/api/v1/estudiantes',require('./api/estudiantes'))
};