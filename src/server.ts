import fastify from "fastify";
import { teams, drivers } from "./data";
import { DriverParams, TeamsParams } from "./interfaces";

const server = fastify()

server.get('/teams', (req, res) => {
    res.type('aplication/json').code(200)

    return teams
})

server.get('/drivers', (req, res) => {
    res.type('aplication/json').code(200)

    return drivers
})

server.get<{Params : DriverParams}>('/drivers/:id', (req, res) => {

    const id = Number(req.params.id)
    const driver = drivers.filter(driver => driver.id === id)

    if (driver.length != 0){
        res.type('aplication/json').code(200)
        return driver
    }
    else {
        res.type('aplication/json').code(204)
        return {message : 'Driver id Not Found'}
    }
    
})

server.get<{Params : TeamsParams}>('/teams/:id', (req, res) => {

    const id = Number(req.params.id)
    const team = teams.filter(team => team.id === id)

    if (team.length != 0){
        res.type('aplication/json').code(200)
        return team
    }
    else{
        res.type('aplication/json').code(204)
        return {message: 'Team id Not Found'}
    }
})

const PORT = Number(process.env.PORT)

server.listen({port:PORT}, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
