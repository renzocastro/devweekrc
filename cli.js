#!/usr/bin/env node

const { sumar } = require('./index');
const [,, ...args] = process.argv;

const resultado = sumar(...args.map(n => parseInt(n)));

console.log({ resultado });
