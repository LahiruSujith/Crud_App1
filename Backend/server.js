const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "studentdb"
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        return res.json(data);
    });
});

app.post('/Create', (req, res) => {
    const sql = "INSERT INTO student (`Name`, `City`) VALUES (?, ?)";
    const values = [
        req.body.Name,
        req.body.City
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("Listening on port 8081");
});
