"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/todoget', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todopost', (req, res, next) => {
    const newtodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newtodo);
    res.status(201).json(newtodo);
});
router.post('/tododelete', (req, res, next) => {
    const deleteid = req.body.id;
    todos = todos.filter((data) => (data.id != deleteid));
    res.status(200).json(todos);
});
router.put('/todo/:todoid', (req, res, next) => {
    const todoid = req.params.todoid;
    const todoindex = todos.findIndex(d => d.id === todoid);
    if (todoindex >= 0) {
        todos[todoindex] = { id: todoid, text: req.body.text };
        return res.status(100).json(todos);
    }
    res.status(404).json({ message: "could not find todo for this id" });
});
exports.default = router;
