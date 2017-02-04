var conexion = require('./connection');
var jwt = require('jsonwebtoken');

function MetodosDB() {
   /* this.seleccionar = function(table, respuesta) {
        conexion.obtener(function(er, cn){
            cn.query('select * from ' + table + ' where estado="1" ', function(error, resultado){
                cn.release();
                if (error) {
                    respuesta.send({estado: 'Error'})
                } else {
                    respuesta.send(resultado)
                }
            })
        })
}*/

    this.seleccionar = function(table, respuesta) {
        conexion.obtener(function(er, cn){
            cn.query(table, function(error, resultado){
                cn.release();
                if (error) {
                    respuesta.send({estado: 'Error'})
                } else {
                    respuesta.send(resultado)
                }
            })
        })
    }

    this.seleccionarId = function(id, table, respuesta){
        conexion.obtener(function(er, cn){
            cn.query(table, id, function(error,resultado){
                cn.release();
                if (error) {
                    respuesta.send({estado: 'Error'});
                } else {
                    respuesta.send(resultado);
                }
            })
        })
    }

    this.papelera = function(table, respuesta) {
        conexion.obtener(function(er, cn){
            cn.query(table, function(error, resultado){
                cn.release();
                if (error) {
                    respuesta.send({estado: 'Error'})
                } else {
                    respuesta.send(resultado)
                }
            })
        })
    }

    this.insertar = function(datos, table, respuesta) {
        conexion.obtener(function(er, cn) {
            cn.query('insert into ' + table + ' set ?', datos, function(error, resultado){
                cn.release();
                if (error) {
                    respuesta.send({ estado: 'Error'});
                } else {
                    respuesta.send({ estado: 'ok'});
                }
            })
        })
    }

    this.actualizar = function(datos, table, respuesta) {
        conexion.obtener(function(req, res){
            res.query('update ' + table + ' set ? where id = ?', [datos, datos.id], function(error, resultado){
                res.release();
                if (error) {
                    respuesta.send({ estado: 'Error' });
                } else {
                    respuesta.send({ estado: 'ok' });
                }
            });
        });
    }

    this.delete = function(id, table, respuesta){
        conexion.obtener(function(req, res){
            res.query('delete from ' + table + ' where id = ?', id, function(error, resultado){
                res.release();
                if (error) {
                    respuesta.send({estado: 'error'});
                } else {
                    respuesta.send({estado: 'ok'});
                }
            })
        })
    }
    this.erase = function(id, table, respuesta){
        conexion.obtener(function(req, res){
            res.query('UPDATE ' + table + ' SET estado="0" where id = ?', id, function(error, resultado){
                res.release();
                if (error) {
                    respuesta.send({estado: 'error'});
                } else {
                    respuesta.send({estado: 'ok'});
                }
            })
        })
    }

    this.restore = function(id, table, respuesta){
        conexion.obtener(function(req, res){
            res.query('UPDATE ' + table + ' SET estado="1" where id = ?', id, function(error, resultado){
                res.release();
                if (error) {
                    respuesta.send({estado: 'error'});
                } else {
                    respuesta.send({estado: 'ok'});
                }
            })
        })
    }

    this.auth = function(datos, respuesta){
        conexion.obtener(function(req, res){
            res.query('SELECT * from Usuario WHERE correo LIKE ? AND contrasena LIKE ? LIMIT 1', [datos.correo, datos.contrasena], function(error, resultado){
                res.release();
                if (error) { 
                    respuesta.send({ estado: 'Error' });
                } else if (resultado == '') {
                    respuesta.send({ success: false, estado: 'Usuario no encontrado' });
                } else {
                    var secret = 'secret';
                    var usuario = {
                        correo: resultado[0].correo,
                        nombre: resultado[0].nombre,
                        apellido: resultado[0].apellido,
                    };
                    var token = jwt.sign(usuario, secret, {
                        expiresIn: 40000
                    })
                    respuesta.json({
                        success: true,
                        token: token
                    });
                }
            })
        })
    }

    this.selCatalogo = function(table, datos, respuesta) {
        conexion.obtener(function(er, cn){
            cn.query(table, (decodeURI(datos) == 'any' ? datos='%':datos=decodeURI(datos)), function(error, resultado){
                cn.release();
                if (error) {
                    respuesta.send({estado: 'Error'})
                } else {
                    respuesta.send(resultado)
                }
            })
        })
    }
}

module.exports = new MetodosDB();