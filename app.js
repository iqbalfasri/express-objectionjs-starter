const Knex = require("knex");
const express = require("express");
const { Model } = require("objection");

const knexConfig = require('./knexfile');

// Initialize knex
const knex = Knex(knexConfig.development);

// Knex instance to objection
Model.knex(knex);

const app = express();
