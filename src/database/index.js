import express from 'express';
import morgan from 'morgan';
import flash from 'connect-flash';
import session from 'express-session';
import MySqlStore from 'express-mysql-session';
import passport from 'passport';

import database from './keys.js';
import '../lib/passport.js';

// Express initialization

const app = express();

app.set('view engine', '.hbs');
// Settings

app.set('port', 5000);

const port = app.get('port');

// Middleware

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
	secret: 'compucontablesjs',
	resave: 'false',
	saveUninitialized: 'false',
	store: new MySqlStore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Global Variables
app.use((req, res, next) => {
	app.locals.success = req.flash('success');
	app.locals.message = req.flash('message');
	app.locals.failure = req.flash('failure');
	next();
});

app.listen(port, () => {
	console.log('Server on port', port);
});
