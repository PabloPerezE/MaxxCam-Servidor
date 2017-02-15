var db = require('./queries');

function http() {
    this.configurar = function(app) {

        // Usuario

        app.get('/usuario/papelera', function(req, res) {
            db.papelera('SELECT Usuario.id, Usuario.correo, Usuario.contrasena, Usuario.nombre, Usuario.apellido, Usuario.direccion, Usuario.telefono, Usuario.TipoUsuario_id, TipoUsuario.descripcion, Usuario.estado FROM Usuario INNER JOIN TipoUsuario ON Usuario.TipoUsuario_id=TipoUsuario.id WHERE Usuario.estado="0"', res);
        })

        app.get('/usuarioId/', function(req, res) {
            db.papelera('SELECT Usuario.id FROM Usuario order by id', res);
        })
        
        app.get('/usuario/', function(req, res) {
            db.seleccionar('SELECT Usuario.id, Usuario.correo, Usuario.contrasena, Usuario.nombre, Usuario.apellido, Usuario.direccion, Usuario.telefono, Usuario.TipoUsuario_id, TipoUsuario.descripcion, Usuario.estado FROM Usuario INNER JOIN TipoUsuario ON Usuario.TipoUsuario_id=TipoUsuario.id WHERE Usuario.estado="1"', res);
        })

        app.get('/usuario/:id/', function(req, res){
            db.seleccionarId(req.params.id, 'SELECT Usuario.id, Usuario.correo, Usuario.contrasena, Usuario.nombre, Usuario.apellido, Usuario.direccion, Usuario.telefono, Usuario.TipoUsuario_id, TipoUsuario.descripcion, Usuario.estado FROM Usuario INNER JOIN TipoUsuario ON Usuario.TipoUsuario_id=TipoUsuario.id WHERE Usuario.id=? and Usuario.estado=1', res);
        })

        app.post('/usuario', function(req, res){
            db.insertar(req.body, 'Usuario', res);
        })

        app.put('/usuario', function(req, res){
            db.actualizar(req.body, 'Usuario', res);
        })

        app.delete('/usuario/:id', function(req, res){
            db.delete(req.params.id, 'Usuario', res);
        })

        app.put('/usuario/:id', function(req, res){
            db.erase(req.params.id, 'Usuario', res);
        })

        app.put('/usuario/papelera/:id', function(req, res){
            db.restore(req.params.id, 'Usuario', res);
        })

        // Tipo de Usuario

        app.get('/tipoUsuario/papelera', function(req, res) {
            db.papelera('SELECT * FROM TipoUsuario WHERE estado=0', res);
        })

        app.get('/tipoUsuarioId/', function(req, res) {
            db.papelera('SELECT TipoUsuario.id FROM TipoUsuario order by id', res);
        })

        app.get('/tipoUsuario/', function(req, res) {
            db.seleccionar('SELECT * FROM TipoUsuario WHERE estado=1', res);
        })

        app.get('/tipoUsuario/:id/', function(req, res){
            db.seleccionarId(req.params.id, 'SELECT * FROM TipoUsuario WHERE id=? and estado=1', res);
        })

        app.post('/tipoUsuario', function(req, res){
            db.insertar(req.body, 'TipoUsuario', res);
        })

        app.put('/tipoUsuario', function(req, res){
            db.actualizar(req.body, 'TipoUsuario', res);
        })

        app.delete('/tipoUsuario/:id', function(req, res){
            db.delete(req.params.id, 'TipoUsuario', res);
        })

        app.put('/tipoUsuario/:id', function(req, res){
            db.erase(req.params.id, 'TipoUsuario', res);
        })

        app.put('/tipoUsuario/papelera/:id', function(req, res){
            db.restore(req.params.id, 'TipoUsuario', res);
        })

        // Producto

        app.get('/producto/papelera', function(req, res) {
            db.papelera('SELECT Producto.id, Producto.descripcion, Producto.detalle, Producto.precio, Producto.Categoria_id, Categoria.categoria, Producto.estado FROM Producto INNER JOIN Categoria ON Producto.Categoria_id=Categoria.id WHERE Producto.estado="0"', res);
        })

        app.get('/productoId/', function(req, res) {
            db.papelera('SELECT Producto.id FROM Producto order by id', res);
        })

        app.get('/producto/', function(req, res) {
            db.seleccionar('SELECT Producto.id, Producto.descripcion, Producto.detalle, Producto.precio, Producto.Categoria_id, Categoria.categoria, Producto.estado FROM Producto INNER JOIN Categoria ON Producto.Categoria_id=Categoria.id WHERE Producto.estado="1"', res);
        })

        app.get('/producto/:id/', function(req, res){
            db.seleccionarId(req.params.id, 'SELECT Producto.id, Producto.descripcion, MIN(Imagen.foto) AS imagen, Producto.detalle, Producto.precio, Producto.Categoria_id, Categoria.categoria, Producto.estado FROM Producto INNER JOIN Categoria ON Producto.Categoria_id=Categoria.id LEFT JOIN Imagen ON Producto.id=Imagen.Producto_id WHERE Producto.id=? and Producto.estado=1', res);
        })

        app.post('/producto', function(req, res){
            db.insertar(req.body, 'Producto', res);
        })

        app.put('/producto', function(req, res){
            db.actualizar(req.body, 'Producto', res);
        })

        app.delete('/producto/:id', function(req, res){
            db.delete(req.params.id, 'Producto', res);
        })

        app.put('/producto/:id', function(req, res){
            db.erase(req.params.id, 'Producto', res);
        })

        app.put('/producto/papelera/:id', function(req, res){
            db.restore(req.params.id, 'Producto', res);
        })

        // Categoria

        app.get('/categoria/papelera', function(req, res) {
            db.papelera('SELECT * FROM Categoria WHERE estado=0', res);
        })

        app.get('/categoriaId/', function(req, res) {
            db.papelera('SELECT Categoria.id FROM Categoria order by id', res);
        })

        app.get('/categoria/', function(req, res) {
            db.seleccionar('SELECT * FROM Categoria WHERE estado=1', res);
        })

        app.get('/categoria/:id/', function(req, res){
            db.seleccionarId(req.params.id, 'SELECT * FROM Categoria WHERE id=? and estado=1', res);
        })

        app.post('/categoria', function(req, res){
            db.insertar(req.body, 'Categoria', res);
        })

        app.put('/categoria', function(req, res){
            db.actualizar(req.body, 'Categoria', res);
        })

        app.delete('/categoria/:id', function(req, res){
            db.delete(req.params.id, 'Categoria', res);
        })

        app.put('/categoria/:id', function(req, res){
            db.erase(req.params.id, 'Categoria', res);
        })

        app.put('/categoria/papelera/:id', function(req, res){
            db.restore(req.params.id, 'Categoria', res);
        })

        // Etiquetas

        app.get('/etiqueta/papelera', function(req, res) {
            db.papelera('SELECT * FROM Etiqueta WHERE estado=0', res);
        })

        app.get('/etiquetaId/', function(req, res) {
            db.papelera('SELECT Etiqueta.id FROM Etiqueta order by id', res);
        })

        app.get('/etiqueta/', function(req, res) {
            db.seleccionar('SELECT Etiqueta.id, Etiqueta.descripcion, Etiqueta.estado FROM Etiqueta WHERE Etiqueta.estado = 1', res);
        })

        app.get('/etiqueta/:id/', function(req, res){
            db.seleccionarId(req.params.id, 'SELECT * FROM Etiqueta WHERE id=? and estado=1', res);
        })

        app.post('/etiqueta', function(req, res){
            db.insertar(req.body, 'Etiqueta', res);
        })

        app.put('/etiqueta', function(req, res){
            db.actualizar(req.body, 'Etiqueta', res);
        })

        app.delete('/etiqueta/:id', function(req, res){
            db.delete(req.params.id, 'Etiqueta', res);
        })

        app.put('/etiqueta/:id', function(req, res){
            db.erase(req.params.id, 'Etiqueta', res);
        })

        app.put('/etiqueta/papelera/:id', function(req, res){
            db.restore(req.params.id, 'Etiqueta', res);
        })

        // Imagenes

        app.get('/imagen/papelera', function(req, res) {
            db.papelera('SELECT Imagen.id, Imagen.nombre, Imagen.foto, Producto.descripcion, Imagen.Producto_id, Imagen.estado FROM Imagen INNER JOIN Producto ON Imagen.Producto_id=Producto.id WHERE Imagen.estado="0"', res);
        })

        app.get('/imagenId/', function(req, res) {
            db.papelera('SELECT Imagen.id FROM Imagen order by id', res);
        })

        app.get('/imagen/', function(req, res) {
            db.seleccionar('SELECT Imagen.id, Imagen.nombre, Imagen.foto, Producto.descripcion, Imagen.Producto_id, Imagen.estado FROM Imagen INNER JOIN Producto ON Imagen.Producto_id=Producto.id WHERE Imagen.estado="1"', res);
        })

        app.get('/imagen/:id/', function(req, res){
            db.seleccionarId(req.params.id, 'SELECT Imagen.id, Imagen.nombre, Imagen.foto, Producto.descripcion, Imagen.Producto_id, Imagen.estado FROM Imagen INNER JOIN Producto ON Imagen.Producto_id=Producto.id WHERE Imagen.id=? and Imagen.estado=1', res);
        })

        app.post('/imagen', function(req, res){
            db.insertar(req.body, 'Imagen', res);
        })

        app.put('/imagen', function(req, res){
            db.actualizar(req.body, 'Imagen', res);
        })

        app.delete('/imagen/:id', function(req, res){
            db.delete(req.params.id, 'Imagen', res);
        })

        app.put('/imagen/:id', function(req, res){
            db.erase(req.params.id, 'Imagen', res);
        })

        app.put('/imagen/papelera/:id', function(req, res){
            db.restore(req.params.id, 'Imagen', res);
        })

        // Etiquetas con Producto

        app.get('/etiqueta-producto/papelera', function(req, res) {
            db.papelera('SELECT ProductoEtiqueta.id, ProductoEtiqueta.Etiqueta_id, ProductoEtiqueta.Producto_id, Etiqueta.descripcion AS etiqueta, Producto.descripcion AS producto FROM ProductoEtiqueta LEFT JOIN Etiqueta ON Etiqueta.id=ProductoEtiqueta.Etiqueta_id LEFT JOIN Producto ON Producto.id=ProductoEtiqueta.producto_id WHERE ProductoEtiqueta.estado=0', res);
        })

        app.get('/etiquetaProductoId/', function(req, res) {
            db.papelera('SELECT ProductoEtiqueta.id FROM ProductoEtiqueta order by id', res);
        })

        app.get('/etiqueta-producto/', function(req, res) {
            db.seleccionar('SELECT ProductoEtiqueta.id, ProductoEtiqueta.Etiqueta_id, ProductoEtiqueta.Producto_id, Etiqueta.descripcion AS etiqueta, Producto.descripcion AS producto FROM ProductoEtiqueta LEFT JOIN Etiqueta ON Etiqueta.id=ProductoEtiqueta.Etiqueta_id LEFT JOIN Producto ON Producto.id=ProductoEtiqueta.producto_id WHERE ProductoEtiqueta.estado=1', res);
        })

        app.get('/etiqueta-producto/:id/', function(req, res){
            db.seleccionarId(req.params.id, 'SELECT * FROM ProductoEtiqueta WHERE id=? and estado=1', res);
        })

        app.post('/etiqueta-producto', function(req, res){
            db.insertar(req.body, 'ProductoEtiqueta', res);
        })

        app.put('/etiqueta-producto', function(req, res){
            db.actualizar(req.body, 'ProductoEtiqueta', res);
        })

        app.delete('/etiqueta-producto/:id', function(req, res){
            db.delete(req.params.id, 'ProductoEtiqueta', res);
        })

        app.put('/etiqueta-producto/:id', function(req, res){
            db.erase(req.params.id, 'ProductoEtiqueta', res);
        })

        app.put('/etiqueta-producto/papelera/:id', function(req, res){
            db.restore(req.params.id, 'ProductoEtiqueta', res);
        })

        // ordenes de compra

        app.get('/ordenCompra/papelera', function(req, res) {
            db.papelera('SELECT CabeceraOrdenCompra.id, CabeceraOrdenCompra.fecha, CabeceraOrdenCompra.Usuario_id, Usuario.id, Usuario.nombre, Usuario.apellido, Usuario.direccion, Usuario.telefono, CabeceraOrdenCompra.estado FROM CabeceraOrdenCompra INNER JOIN Usuario ON CabeceraOrdenCompra.Usuario_id=Usuario.id WHERE CabeceraOrdenCompra.estado="0"', res);
        })

        app.get('/ordenCompra/', function(req, res) {
            db.seleccionar('SELECT CabeceraOrdenCompra.id, CabeceraOrdenCompra.fecha, CabeceraOrdenCompra.Usuario_id, Usuario.id, Usuario.nombre, Usuario.apellido, Usuario.direccion, Usuario.telefono, CabeceraOrdenCompra.estado FROM CabeceraOrdenCompra INNER JOIN Usuario ON CabeceraOrdenCompra.Usuario_id=Usuario.id WHERE CabeceraOrdenCompra.estado="1"', res);
        })

        app.get('/ordenCompra/:id/', function(req, res){
            db.seleccionarId(req.params.id, 'SELECT CabeceraOrdenCompra.id, CabeceraOrdenCompra.fecha, CabeceraOrdenCompra.Usuario_id, Usuario.id, Usuario.nombre, Usuario.apellido, Usuario.direccion, Usuario.telefono, CabeceraOrdenCompra.estado FROM CabeceraOrdenCompra INNER JOIN Usuario ON CabeceraOrdenCompra.Usuario_id=Usuario.id WHERE CabeceraOrdenCompra.id=? AND CabeceraOrdenCompra.estado="1"', res);
        })

        app.post('/ordenCompra', function(req, res){
            db.insertar(req.body, 'CabeceraOrdenCompra', res);
        })

        app.put('/ordenCompra', function(req, res){
            db.actualizar(req.body, 'CabeceraOrdenCompra', res);
        })

        app.delete('/ordenCompra/:id', function(req, res){
            db.delete(req.params.id, 'CabeceraOrdenCompra', res);
        })

        app.put('/ordenCompra/:id', function(req, res){
            db.erase(req.params.id, 'CabeceraOrdenCompra', res);
        })

        app.put('/ordenCompra/papelera/:id', function(req, res){
            db.restore(req.params.id, 'CabeceraOrdenCompra', res);
        })

        // Autentificacion

        app.post('/auth/', function(req, res){
            db.auth(req.body, res);
        })

        // Seleccionar catalogo

        app.get('/catalogo/:categoria', function(req, res) {
            db.selCatalogo('SELECT Producto.id, MIN(Imagen.foto) AS imagen, Producto.descripcion, Producto.precio, Categoria.categoria FROM Producto LEFT JOIN Imagen ON Producto.id=Imagen.Producto_id LEFT JOIN Categoria ON Producto.categoria_id=Categoria.id WHERE Producto.estado=1 AND Categoria.categoria LIKE ? GROUP BY id',req.params.categoria, res);
        })

        //Infoprod

        app.get('/infoprod/:id', function(req, res) {
            db.seleccionarId(req.params.id, 'SELECT Imagen.foto, Imagen.id FROM Imagen INNER JOIN Producto ON Imagen.Producto_id=Producto.id WHERE Imagen.estado="1" AND Producto.id=?', res);
        })
        
        // Inicio

        app.get('/inicio/papelera', function(req, res) {
            db.papelera('SELECT Inicio.id, Inicio.foto, Inicio.estado FROM Inicio WHERE Inicio.estado="0"', res);
        })

        app.get('/inicioId/', function(req, res) {
            db.papelera('SELECT Inicio.id FROM Inicio order by id', res);
        })

        app.get('/inicio/', function(req, res) {
            db.seleccionar('SELECT Inicio.id, Inicio.foto, Inicio.estado FROM Inicio WHERE Inicio.estado="1"', res);
        })

        app.get('/inicio/:id/', function(req, res){
            db.seleccionarId(req.params.id, 'SELECT Inicio.id, Inicio.foto, Inicio.estado FROM Inicio WHERE Inicio.id=? and Inicio.estado=1', res);
        })

        app.post('/inicio', function(req, res){
            db.insertar(req.body, 'Inicio', res);
        })

        app.put('/inicio', function(req, res){
            db.actualizar(req.body, 'Inicio', res);
        })

        app.delete('/inicio/:id', function(req, res){
            db.delete(req.params.id, 'Inicio', res);
        })

        app.put('/inicio/:id', function(req, res){
            db.erase(req.params.id, 'Inicio', res);
        })

        app.put('/inicio/papelera/:id', function(req, res){
            db.restore(req.params.id, 'Inicio', res);
        })
    }
}

module.exports = new http();