const model = require("../model/activities")
const express = require("express")
const app = express.Router()
app.get("/", (req, res) => {
    res.send(model.getAll())
})
    .get("/:id", (req, res) => {
        const id = req.params.id
        const activity = model.get(+id)
        res.send(activity)
    })
    .post("/", (req, res) => {
        const activity = model.add(req.body)
        res.send(activity)
    })
    .patch("/:id", (req, res) => {
        const id = req.params.id
        const activity = model.update(+id, req.body)
        res.send(activity)
    })
    .delete("/:id", (req, res) => {
        const id = req.params.id
        const ret = model.remove(+id)
        res.send(ret)
    })
module.exports = app