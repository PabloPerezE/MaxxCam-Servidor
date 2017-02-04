var mysql = require('mysql');

function Conexion(){
    this.pool = null;

    this.inicia = function() {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'maxxcam'
        })
    }

    this.obtener = function(callback){
        this.pool.getConnection(function(error, connection){
            callback(error, connection);
        })
    }
}

module.exports = new Conexion();