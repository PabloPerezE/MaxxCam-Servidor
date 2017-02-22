var db = require('./queries');
var mailer = require('./mail');

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
            db.papelera('SELECT CabeceraOrdenCompra.id, CabeceraOrdenCompra.fecha, CabeceraOrdenCompra.Usuario_id, Usuario.nombre, Usuario.apellido, Usuario.direccion, Usuario.telefono, CabeceraOrdenCompra.estado FROM CabeceraOrdenCompra INNER JOIN Usuario ON CabeceraOrdenCompra.Usuario_id=Usuario.id WHERE CabeceraOrdenCompra.estado="0"', res);
        })

        app.get('/ordenCompraId/', function(req, res) {
            db.papelera('SELECT CabeceraOrdenCompra.id FROM CabeceraOrdenCompra order by id', res);
        })

        app.get('/ordenCompraId/', function(req, res) {
            db.papelera('SELECT CabeceraOrdenCompra.id FROM CabeceraOrdenCompra order by id', res);
        })

        app.get('/ordenCompra/', function(req, res) {
            db.seleccionar('SELECT CabeceraOrdenCompra.id, CabeceraOrdenCompra.fecha, CabeceraOrdenCompra.Usuario_id, Usuario.nombre, Usuario.apellido, Usuario.direccion, Usuario.telefono, CabeceraOrdenCompra.estado FROM CabeceraOrdenCompra INNER JOIN Usuario ON CabeceraOrdenCompra.Usuario_id=Usuario.id WHERE CabeceraOrdenCompra.estado="1"', res);
        })

        app.get('/ordenCompra/:id/', function(req, res){
            db.seleccionarId(req.params.id, 'SELECT CabeceraOrdenCompra.id, CabeceraOrdenCompra.fecha, CabeceraOrdenCompra.Usuario_id, Usuario.nombre, Usuario.apellido, Usuario.direccion, Usuario.telefono, CabeceraOrdenCompra.estado FROM CabeceraOrdenCompra INNER JOIN Usuario ON CabeceraOrdenCompra.Usuario_id=Usuario.id WHERE CabeceraOrdenCompra.id=? AND CabeceraOrdenCompra.estado="1"', res);
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

        // Detalle orde de compra

        app.post('/detalle', function(req, res){
            db.insertar(req.body, 'DetalleOrdenCompra', res);
        })

        app.get('/detalleId/', function(req, res) {
            db.papelera('SELECT DetalleOrdenCompra.id FROM DetalleOrdenCompra order by id', res);
        })

        app.get('/detalle/:id/', function(req, res){
            db.seleccionarId(req.params.id, 'SELECT DetalleOrdenCompra.id, DetalleOrdenCompra.CabeceraOrdenCompra_id, DetalleOrdenCompra.Producto_id, Producto.descripcion, Producto.precio, DetalleOrdenCompra.estado FROM DetalleOrdenCompra INNER JOIN Producto ON DetalleOrdenCompra.Producto_id=Producto.id WHERE DetalleOrdenCompra.CabeceraOrdenCompra_id=? AND DetalleOrdenCompra.estado="1"', res);
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

        //mail
        
        const nodemailer = require('nodemailer');

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'maxxcam.mail@gmail.com',
                pass: 'yourpass'
            }
        });

      //  let htmlTemplate = ;

        app.post('/enviarmail', function(req, res){
            console.log(req.body.tabla);
            let results = req.body.tabla;

            let table = results.reduce(function(a, b) {
  return a + '<tr class="item"><td>' + b.producto + '</td><td>' + b.precio + '</td></tr>';
}, '');

            let mailOptions = {
                from: '"MaxxCam" <maxxcam.mail@gmail.com>', // sender address
                to: req.body.para, // list of receivers
                subject: 'MaxxCam Orden de Compra ', // Subject line
                text: '', // plain text body
                html: `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Simple Transactional Email</title>
    <style>
      /* -------------------------------------
          GLOBAL RESETS
      ------------------------------------- */
      img {
        border: none;
        -ms-interpolation-mode: bicubic;
        max-width: 100%; }
      body {
        background-color: #f6f6f6;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        line-height: 1.4;
        margin: 0;
        padding: 0; 
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%; }
      table {
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%; }
        table td {
          font-family: sans-serif;
          font-size: 14px;
          vertical-align: top; }
      /* -------------------------------------
          BODY & CONTAINER
      ------------------------------------- */
      .body {
        background-color: #f6f6f6;
        width: 100%; }
      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
      .container {
        display: block;
        Margin: 0 auto !important;
        /* makes it centered */
        max-width: 580px;
        padding: 10px;
        width: 580px; }
      /* This should also be a block element, so that it will fill 100% of the .container */
      .content {
        box-sizing: border-box;
        display: block;
        Margin: 0 auto;
        max-width: 580px;
        padding: 10px; }
      /* -------------------------------------
          HEADER, FOOTER, MAIN
      ------------------------------------- */
      .main {
        background: #fff;
        border-radius: 3px;
        width: 100%; }
      .wrapper {
        box-sizing: border-box;
        padding: 20px; }
      .footer {
        clear: both;
        padding-top: 10px;
        text-align: center;
        width: 100%; }
        .footer td,
        .footer p,
        .footer span,
        .footer a {
          color: #999999;
          font-size: 12px;
          text-align: center; }
      /* -------------------------------------
          TYPOGRAPHY
      ------------------------------------- */
      h1,
      h2,
      h3,
      h4 {
        color: #000000;
        font-family: sans-serif;
        font-weight: 400;
        line-height: 1.4;
        margin: 0;
        Margin-bottom: 30px; }
      h1 {
        font-size: 35px;
        font-weight: 300;
        text-align: center;
        text-transform: capitalize; }
      p,
      ul,
      ol {
        font-family: sans-serif;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        Margin-bottom: 15px; }
        p li,
        ul li,
        ol li {
          list-style-position: inside;
          margin-left: 5px; }
      a {
        color: #3498db;
        text-decoration: underline; }
      /* -------------------------------------
          BUTTONS
      ------------------------------------- */
      .btn {
        box-sizing: border-box;
        width: 100%; }
        .btn > tbody > tr > td {
          padding-bottom: 15px; }
        .btn table {
          width: auto; }
        .btn table td {
          background-color: #ffffff;
          border-radius: 5px;
          text-align: center; }
        .btn a {
          background-color: #ffffff;
          border: solid 1px #3498db;
          border-radius: 5px;
          box-sizing: border-box;
          color: #3498db;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
          padding: 12px 25px;
          text-decoration: none;
          text-transform: capitalize; }
      .btn-primary {
        background-color: #3498db; }
      .btn-primary {
        background-color: #3498db;
        border-color: #3498db;
        color: #ffffff; }
      /* -------------------------------------
          OTHER STYLES THAT MIGHT BE USEFUL
      ------------------------------------- */
      .last {
        margin-bottom: 0; }
      .first {
        margin-top: 0; }
      .align-center {
        text-align: center; }
      .align-right {
        text-align: right; }
      .align-left {
        text-align: left; }
      .clear {
        clear: both; }
      .mt0 {
        margin-top: 0; }
      .mb0 {
        margin-bottom: 0; }
      .preheader {
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0; }
      .powered-by a {
        text-decoration: none; }
      hr {
        border: 0;
        border-bottom: 1px solid #f6f6f6;
        Margin: 20px 0; }
      /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 620px) {
        table[class=body] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important; }
        table[class=body] p,
        table[class=body] ul,
        table[class=body] ol,
        table[class=body] td,
        table[class=body] span,
        table[class=body] a {
          font-size: 16px !important; }
        table[class=body] .wrapper,
        table[class=body] .article {
          padding: 10px !important; }
        table[class=body] .content {
          padding: 0 !important; }
        table[class=body] .container {
          padding: 0 !important;
          width: 100% !important; }
        table[class=body] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important; }
        table[class=body] .btn table {
          width: 100% !important; }
        table[class=body] .btn a {
          width: 100% !important; }
        table[class=body] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important; }}
      /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {
        .ExternalClass {
          width: 100%; }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%; }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important; } 
        .btn-primary table td:hover {
          background-color: #34495e !important; }
        .btn-primary a:hover {
          background-color: #34495e !important;
          border-color: #34495e !important; } }

            .invoice-box{
        max-width:800px;
        margin:auto;
        padding:30px;
        border:1px solid #eee;
        box-shadow:0 0 10px rgba(0, 0, 0, .15);
        font-size:16px;
        line-height:24px;
        font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        color:#555;
    }
    
    table{
        width:100%;
        line-height:inherit;
        text-align:left;
    }
    
    table td{
        padding:5px;
        vertical-align:top;
    }
    
    table tr td:nth-child(2){
        text-align:right;
    }
    
    table tr.top table td{
        padding-bottom:20px;
    }
    
    table tr.top table td.title{
        font-size:45px;
        line-height:45px;
        color:#333;
    }
    
    table tr.information table td{
        padding-bottom:40px;
    }
    
    table tr.heading td{
        background:#eee;
        border-bottom:1px solid #ddd;
        font-weight:bold;
    }
    
    table tr.details td{
        padding-bottom:20px;
    }
    
    table tr.item td{
        border-bottom:1px solid black;
    }
    
    table tr.item.last td{
        border-bottom:none;
    }
    
    table tr.total td:nth-child(2){
        border-top:2px solid #eee;
        font-weight:bold;
    }
    
    @media only screen and (max-width: 600px) {
        table tr.top table td{
            width:100%;
            display:block;
            text-align:left;
        }
        
        table tr.information table td{
            width:100%;
            display:block;
            text-align:left;
        }
    }
    </style>
  </head>
  <body class="">
    <table border="0" cellpadding="0" cellspacing="0" class="body">
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="content">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader">Se ha generado orden de compra.</span>
            <table class="main">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper">
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p>Hola, ` + req.body.nombre +`</p>
                        <p>Le informamos que se ha generado su orden de compra.</p>
                              <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                <span style="color: #1a242f">Maxx</span><span style="color: goldenrod">Cam</span>
                            </td>
                            
                            <td>
                                Orden de compra #: ` + req.body.id +`<br>
                                Fecha de emisión: ` + req.body.fecha +`<br>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                Cliente: ` + req.body.nombre +` ` + req.body.apellido +`<br>
                                Correo Electrónico: ` + req.body.correo +`
                            </td>
                            
                            <td>
                                Teléfono: ` + req.body.telefono +`<br>
                                Dirección: ` + req.body.direccion +`
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="heading">
                <td>
                    <strong>Producto</strong>
                </td>
                
                <td>
                    <b>Precio</b>
                </td>
            </tr>`
            + table +
            `
            <tr class="total">
                <td></td>
                
                <td>
                   ` + req.body.total +`
                </td>
            </tr>
        </table>
                            <tr>
                              <td align="left">
                              <br>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p>Estaremos en contacto con usted en un plazo máximo de 24 horas. </p>
                        <p>Deseandole nuestros mejores deseos</p>
                        <p>MaxxCam</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- END MAIN CONTENT AREA -->
              </table>
            
<!-- END CENTERED WHITE CONTAINER --></div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>` // html body
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.send({estado: 'Error'});}
                    console.log('Message %s sent: %s', info.messageId, info.response);
                    return res.send({estado: 'Enviado'});
            });
        })
    }
}

module.exports = new http();

