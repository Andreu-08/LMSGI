var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//se carga el modulo de sqlite3
var sqlite3 = require('sqlite3');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const {process_params} = require("express/lib/router");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//se carga el modulo knex
//se inicializa knez con sqlite3

var db = require('knex')({
        client: 'sqlite3',
        connection: {
            filename: 'libros.sqlite'
        },
        useNullAsDefault: true
    }
);

//metodo para mostrar la BDD en la pagina (HTTP: GET)
app.get('/api/libros', function(req, res){
    db.select('l.id',
        'l.titulo',
        'l.año_publicacion',
        'l.coleccion',
        'l.genero',
        'l.editorial',
        'l.autor',
        'l.ref',
        'l.portada')
        .from('libros as l')
        .then( function(data){
            result={};
            result.libros = data;
            res.json(result);
        });
});


//metodo para añafir un libro a la BDD (INSERT)
//se hace un POST para un album con id concreto para el (UPDATE)
app.post('/api/libros/:id', function(req, res){

    let id = req.params.id;
    let libroData = req.body;
    //actualizar la base de datos
    db('Libros')
        .update(libroData)
        .where('id', id)
        .then(function(data){
            res.json(data)
        });

});
app.post('/api/libros', function(req, res){

    let data_form = req.body;
    console.log('app. app.post(). Params: ', data_form);
   db.insert(data_form)
        .from('libros')
        .then( function(data){

            res.json(result);
        });
});
//metodo delete para eliminar elementos de la API por id (DELETE)
app.delete('/api/libros/:id', function(req, res) {
    // Buscar por ID
    let id = parseInt(req.params.id);
    db.delete()
        .from('libros')
        .where('id', id)
        .then(function(data) {
            res.json(data);
        })
});

//buscar un libro por id y por titulo, este codigo evita que interfieran entre ellos
app.get('/api/libros/:busqueda', function(req, res) {
    let busqueda = req.params.busqueda;
    if (isNaN(parseInt(busqueda))) {
        // Asume que la búsqueda es por título si no es un número
        db.select('l.id',
            'l.titulo',
            'l.año_publicacion',
            'l.coleccion',
            'l.genero',
            'l.editorial',
            'l.autor',
            'l.ref',
            'l.portada')
            .from('libros as l')
            .where('l.titulo', 'like', `%${busqueda}%`)
            .then(function(data) {
                res.json(data);
            })

    } else {
        // Buscar por ID
        let id = parseInt(busqueda);
        db.select('l.id',
            'l.titulo',
            'l.año_publicacion',
            'l.coleccion',
            'l.genero',
            'l.editorial',
            'l.autor',
            'l.ref',
            'l.portada')
            .from('libros as l')
            .where('l.id', id)
            .then(function(data) {
                res.json(data);
            })
    }
});

app.use(express.static('public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
