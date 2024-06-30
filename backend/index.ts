#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from './app'

import debug from 'debug';
import http from 'http';

import { Db, MongoClient } from "mongodb";
import { ErrnoException } from './index.d'

const _debugger = debug('backend:server')

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '8081');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces and connect to mongodb instance.
 */

const uri = process.env.MONGODB_URL || "mongodb://root:example@localhost:2772/";

export let db!: Db;
const client = new MongoClient(uri);

client.connect().then((connection) => {
    db = connection.db("x-partners")
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
}).catch(err => console.log('Error connect to database, server is down', err));

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any): number | false {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: ErrnoException) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr?.port;
    _debugger('Listening on ' + bind);
}
