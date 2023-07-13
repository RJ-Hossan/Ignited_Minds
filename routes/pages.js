const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.render("index");
});

router.get('/h_stem', (req, res) => {
    res.render("h_stem");
});

router.get('/h_programming', (req, res) => {
    res.render("h_programming");
});

router.get('/h_career_exploration', (req, res) => {
    res.render("h_career_exploration");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get('/aboutus', (req, res) => {
    res.render("aboutus");
})

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/user_common_page", (req, res) => {
    res.render("user_common_page");
});

router.get("/formulae-home", (req, res) => {
    res.render("formulae-home");
});

router.get("/formula-chemistry", (req, res) => {
    res.render("formula-chemistry");
});

router.get("/formula-physics", (req, res) => {
    res.render("formula-physics");
});

router.get("/formula-math", (req, res) => {
    res.render("formula-math");
});

router.get("/prefix", (req, res) => {
    res.render("universal_prefixes");
});

router.get("/constant", (req, res) => {
    res.render("universal_constants");
});

router.get("/periodicTable", (req, res) => {
    res.render("periodic_table");
});

router.get("/unit", (req, res) => {
    res.render("measurement_units");
});

router.get("/unit-c", (req, res) => {
    res.render("unit_conversion");
});



module.exports = router;