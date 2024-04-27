"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/server.ts
var import_fastify = __toESM(require("fastify"));

// src/data.ts
var teams = [
  { "id": 1, "name": "Oracle Red Bull Racing", "country": "Austria" },
  { "id": 2, "name": "Mercedes-AMG PETRONAS F1 Team", "country": "Germany" },
  { "id": 3, "name": "Scuderia Ferrari", "country": "Italy" },
  { "id": 4, "name": "McLaren Formula 1 Team", "country": "United Kingdom" },
  { "id": 5, "name": "Aston Martin Aramco F1 Team", "country": "United Kingdom" },
  { "id": 6, "name": "BWT Alpine F1 Team", "country": "France" },
  { "id": 7, "name": "Williams Racing", "country": "United Kingdom" },
  { "id": 8, "name": "Visa Cash App RB Formula One Team", "country": "Italy" },
  { "id": 9, "name": "Stake F1 Team Kick Sauber", "country": "Switzerland" },
  { "id": 10, "name": "MoneyGram Haas F1 Team", "country": "United States" }
];
var drivers = [
  { "id": 1, "name": "Max Verstappen", "team": "Oracle Red Bull Racing" },
  { "id": 2, "name": "Sergio Perez", "team": "Oracle Red Bull Racing" },
  { "id": 3, "name": "Lewis Hamilton", "team": "Mercedes-AMG PETRONAS F1 Team" },
  { "id": 4, "name": "George Russell", "team": "Mercedes-AMG PETRONAS F1 Team" },
  { "id": 5, "name": "Charles Leclerc", "team": "Scuderia Ferrari" },
  { "id": 6, "name": "Carlos Sainz", "team": "Scuderia Ferrari" },
  { "id": 7, "name": "Lando Norris", "team": "McLaren Formula 1 Team" },
  { "id": 8, "name": "Oscar Piastri", "team": "McLaren Formula 1 Team" },
  { "id": 9, "name": "Fernando Alonso", "team": "Aston Martin Aramco F1 Team" },
  { "id": 10, "name": "Lance Stroll", "team": "Aston Martin Aramco F1 Team" },
  { "id": 11, "name": "Pierre Gasly", "team": "BWT Alpine F1 Team" },
  { "id": 12, "name": "Esteban Ocon", "team": "BWT Alpine F1 Team" },
  { "id": 13, "name": "Alexander Albon", "team": "Williams Racing" },
  { "id": 14, "name": "Logan Sargeant", "team": "Williams Racing" },
  { "id": 15, "name": "Yuki Tsunoda", "team": "Visa Cash App RB Formula One Team" },
  { "id": 16, "name": "Daniel Ricciardo", "team": "Visa Cash App RB Formula One Team" },
  { "id": 17, "name": "Valtteri Bottas", "team": "Stake F1 Team Kick Sauber" },
  { "id": 18, "name": "Zhou Guanyu", "team": "Stake F1 Team Kick Sauber" },
  { "id": 19, "name": "Kevin Magnussen", "team": "MoneyGram Haas F1 Team" },
  { "id": 20, "name": "Nico Hulkenberg", "team": "MoneyGram Haas F1 Team" }
];

// src/server.ts
var server = (0, import_fastify.default)();
server.get("/teams", (req, res) => {
  res.type("aplication/json").code(200);
  return teams;
});
server.get("/drivers", (req, res) => {
  res.type("aplication/json").code(200);
  return drivers;
});
server.get("/drivers/:id", (req, res) => {
  const id = Number(req.params.id);
  const driver = drivers.filter((driver2) => driver2.id === id);
  if (driver.length != 0) {
    res.type("aplication/json").code(200);
    return driver;
  } else {
    res.type("aplication/json").code(204);
    return { message: "Driver id Not Found" };
  }
});
server.get("/teams/:id", (req, res) => {
  const id = Number(req.params.id);
  const team = teams.filter((team2) => team2.id === id);
  if (team.length != 0) {
    res.type("aplication/json").code(200);
    return team;
  } else {
    res.type("aplication/json").code(204);
    return { message: "Team id Not Found" };
  }
});
var PORT = Number(process.env.PORT);
server.listen({ port: PORT }, () => {
  console.log(`Servidor rodando no endere\xE7o http://localhost:${PORT}`);
});
